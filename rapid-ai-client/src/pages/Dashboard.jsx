import { useState, useEffect } from "react";
import api from "../services/api";
import { useDbUser } from "../context/AuthContext";
import Hero from "../components/dashboard/Hero";
import StatsCard from "../components/dashboard/StatsCard";
import QuickTools from "../components/dashboard/QuickTools";
import RecentActivity from "../components/dashboard/RecentActivity";
import useApi from "../hooks/useApi";

function Dashboard() {

    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const { authGet } = useApi();
    const { dbUser } = useDbUser();

    useEffect(() => {
        if (!dbUser) return;
        async function loadDashboard() {
            try {
            const response =
                await authGet(`/dashboard/${dbUser.id}`);
                setStats(response.data.stats);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        loadDashboard();
    }, [dbUser]);

    return (
        <div className="space-y-8">
            <Hero />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {!loading && stats && (
                    <>
                        <StatsCard
                            title="Articles"
                            used={stats.articles.used}
                            limit={stats.articles.limit}
                            color="text-blue-600"
                        />
                        <StatsCard
                            title="Titles"
                            used={stats.titles.used}
                            limit={stats.titles.limit}
                            color="text-green-600"
                        />
                        <StatsCard
                            title="Resume Reviews"
                            used={stats.resume.used}
                            limit={stats.resume.limit}
                            color="text-purple-600"
                        />
                    </>
                )}
            </div>
            <QuickTools />
            <RecentActivity />
        </div>
    );
}

export default Dashboard;