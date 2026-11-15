import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";

const AuthContext = createContext();

const API_URL = process.env.REACT_APP_API_URL;

export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Login
    const login = (token) => {
        setAccessToken(token);
    };

    // Refresh Access Token
    const refreshAccessToken = useCallback(async () => {
        try {
            const response = await fetch(
                `${API_URL}/api/token/refresh/`,
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setAccessToken(null);
                return false;
            }

            setAccessToken(data.access);
            return true;

        } catch {
            setAccessToken(null);
            return false;
        }
    }, []);

    // Logout
    const logout = async () => {
        try {
            await fetch(
                `${API_URL}/api/logout/`,
                {
                    method: "POST",
                    credentials: "include",
                }
            );
        } catch (error) {
            console.log("Logout error:", error);
        } finally {
            setAccessToken(null);
        }
    };

    // Restore login when opening or refreshing the website
    useEffect(() => {
        const restoreLogin = async () => {
            await refreshAccessToken();
            setLoading(false);
        };

        restoreLogin();
    }, [refreshAccessToken]);

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                loading,
                login,
                logout,
                refreshAccessToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}