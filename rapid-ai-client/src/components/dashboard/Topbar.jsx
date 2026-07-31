import { FiBell, FiSearch, FiSun, FiMenu } from "react-icons/fi";
import { UserButton, useUser } from "@clerk/clerk-react";


function Topbar({ setSidebarOpen }) {
    const { user } = useUser();

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="flex items-center gap-3 flex-1">

                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden w-11 h-11 border rounded-xl flex items-center justify-center"
                >
                    <FiMenu size={22} />
                </button>
                <div className="relative flex-1 max-w-xl">
                    <FiSearch
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search AI tools..."
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                    />
                </div>
                <div className="flex items-center gap-2 md:gap-4 ml-auto">

                    <button
                        className="w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-gray-100"
                    >
                        <FiBell size={20} />
                    </button>

                    <button
                        className="w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-gray-100"
                        title="Dark mode coming soon"
                    >
                        <FiSun size={20} />
                    </button>

                    <div className="flex items-center gap-3">
                        <UserButton afterSignOutUrl="/" />

                        <div className="hidden md:block">
                            <h4 className="font-semibold">
                                {user?.firstName}
                            </h4>

                            <p className="text-sm text-gray-500">
                                Free Plan
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Topbar;