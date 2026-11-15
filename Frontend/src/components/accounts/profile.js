useEffect(() => {
    if (authLoading) return;

    const getProfile = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/api/profile/`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.detail || "Failed to load profile");
                return;
            }

            setUser(data);
        } catch {
            setError("Something went wrong");
        } finally {
            setProfileLoading(false);
        }
    };

    if (accessToken) {
        getProfile();
    } else {
        setProfileLoading(false);
        setError("You are not logged in");
    }
}, [accessToken, authLoading]);