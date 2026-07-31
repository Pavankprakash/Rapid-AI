import { NavLink } from "react-router-dom";
import menuItems from "./menuItems";

function Sidebar() {
    return (
        <aside className="w-72 h-screen bg-gray-900 text-white flex flex-col">

            {/* Logo */}
            <div className="px-8 py-8 border-b border-gray-800">
                <h1 className="text-3xl font-bold text-purple-400">
                    Rapid AI
                </h1>

                <p className="text-gray-400 text-sm mt-2">
                    AI Productivity Suite
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6">
                {menuItems.map((group) => (
                    <div
                        key={group.section}
                        className="mb-8"
                    >
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                            {group.section}
                        </p>
                        <div className="space-y-2">
                            {group.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 px-4 py-3 rounded-xl transition
                                            ${
                                                isActive
                                                    ? "bg-purple-600 text-white"
                                                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                            }`
                                        }
                                    >
                                        <Icon size={20} />
                                        <span>{item.name}</span>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Upgrade Card */}
            <div className="p-6 border-t border-gray-800">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-5">
                    <h3 className="font-bold">
                        Upgrade
                    </h3>
                    <p className="text-sm mt-2 opacity-90">
                        Unlock unlimited AI generations.
                    </p>
                    <button className="w-full py-2 rounded-lg bg-white text-purple-700 font-semibold hover:bg-gray-100 transition">
                        Go Premium
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;