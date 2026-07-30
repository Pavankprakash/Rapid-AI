import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useDbUser } from "../context/AuthContext";
import HistoryList from "../components/history/HistoryList";
import useApi from "../hooks/useApi";

function History() {

    const { getToken } = useAuth();
    const { authGet } = useApi();

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { dbUser, loading: authLoading } = useDbUser();

    useEffect(() => {
        if (authLoading || !dbUser) return;

        async function loadHistory() {
            try {
                const token = await getToken();
                console.log("TOKEN:", token);

                const response = await authGet(`/history/${dbUser.id}`);
                setHistory(response.data.history);
            } catch(err){
                console.log(err.response?.data);
            }
            finally{
                setLoading(false);
            }
        }
        loadHistory();
    }, [dbUser, authLoading, getToken]);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    History
                </h1>

                <p className="text-gray-500 mt-2">
                    View all your AI generations.
                </p>
            </div>

            <HistoryList
                history={history}
                loading={loading}
            />
        </div>
    );
}

export default History;