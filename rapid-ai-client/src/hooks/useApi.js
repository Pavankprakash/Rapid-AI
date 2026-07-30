import { useAuth } from "@clerk/clerk-react";
import api from "../services/api";

export default function useApi() {
    const { getToken } = useAuth();

    const authGet = async (url) => {
        const token = await getToken();

        return api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    };

    const authPost = async (url, data) => {
        const token = await getToken();

        return api.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    };

    return {
        authGet,
        authPost
    };
}