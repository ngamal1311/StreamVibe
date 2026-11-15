
import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from "react";

import { useAuth } from "./AuthContext";

const SavedContext = createContext();

export function SavedProvider({ children }) {
    const { accessToken, loading: authLoading } = useAuth();

    const [saved, setSaved] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get saved items
    const getSaved = useCallback(async () => {
        if (!accessToken) {
            setSaved([]);
            setLoading(false);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/api/saved/`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                console.log(data);
                return;
            }

            setSaved(data);
        } catch (error) {
            console.log("Get saved error:", error);
        } finally {
            setLoading(false);
        }
    }, [accessToken]);

    useEffect(() => {
        if (authLoading) return;

        getSaved();
    }, [authLoading, getSaved]);

    // Check if item is saved
    const isSaved = (tmdbId, mediaType) => {
        return saved.some(
            (item) =>
                item.tmdb_id === tmdbId &&
                item.media_type === mediaType
        );
    };

    // Add to saved
    const addSaved = async (tmdbId, mediaType) => {
        if (!accessToken) return false;

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/api/saved/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify({
                        tmdb_id: tmdbId,
                        media_type: mediaType,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                console.log(data);
                return false;
            }

            setSaved((prev) => {
                const alreadySaved = prev.some(
                    (item) =>
                        item.tmdb_id === tmdbId &&
                        item.media_type === mediaType
                );

                return alreadySaved ? prev : [...prev, data];
            });

            return true;
        } catch (error) {
            console.log("Add saved error:", error);
            return false;
        }
    };

    // Remove from saved
    const removeSaved = async (tmdbId, mediaType) => {
        if (!accessToken) return false;

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/api/saved/${mediaType}/${tmdbId}/`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            if (!response.ok) {
                const data = await response.json();
                console.log(data);
                return false;
            }

            setSaved((prev) =>
                prev.filter(
                    (item) =>
                        !(
                            item.tmdb_id === tmdbId &&
                            item.media_type === mediaType
                        )
                )
            );

            return true;
        } catch (error) {
            console.log("Remove saved error:", error);
            return false;
        }
    };

    // Add / Remove
    const toggleSaved = async (tmdbId, mediaType) => {
        if (isSaved(tmdbId, mediaType)) {
            return await removeSaved(tmdbId, mediaType);
        }

        return await addSaved(tmdbId, mediaType);
    };

    return (
        <SavedContext.Provider
            value={{
                saved,
                loading,
                isSaved,
                addSaved,
                removeSaved,
                toggleSaved,
            }}
        >
            {children}
        </SavedContext.Provider>
    );
}

export function useSaved() {
    return useContext(SavedContext);
}
