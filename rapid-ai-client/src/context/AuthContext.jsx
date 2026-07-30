import { createContext, useContext, useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const { getToken, isSignedIn } = useAuth();

    const [dbUser, setDbUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const { user } = useUser();
    useEffect(() => {
        async function syncUser() {
            if (!isSignedIn) {
                setDbUser(null);
                setLoading(false);
                return;
            }
            try {
                const token = await getToken();

                const response = await api.get("/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setDbUser(response.data.user);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        syncUser();
    }, [isSignedIn, getToken, user]);

    return (
        <AuthContext.Provider
            value={{
                dbUser,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export function useDbUser() {
    return useContext(AuthContext);
}
export default AuthContext;