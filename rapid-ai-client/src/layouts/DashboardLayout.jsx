import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return (
        <div className="flex bg-gray-100">
            <Sidebar />

            <div className="flex-1 bg-gray-100 min-h-screen">
                <Topbar />

                <main className="p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;