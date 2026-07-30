import { NavLink } from "react-router-dom";
import menuItems from "./menuItems";

function MobileSidebar({ open, onClose }) {

    if (!open) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={onClose}
            />

            <aside
                className="
                    fixed
                    top-0
                    left-0
                    h-full
                    w-72
                    bg-gray-900
                    text-white
                    z-50
                    overflow-y-auto
                "
            >
                <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-purple-400">
                        Rapid AI
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl"
                    >
                        ✕
                    </button>
                </div>

                <nav className="p-6">
                    {menuItems.map(group => (
                        <div key={group.section} className="mb-8">

                            <p className="text-xs uppercase text-gray-500 mb-3">
                                {group.section}
                            </p>

                            {group.items.map(item => {

                                const Icon = item.icon;

                                return (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        onClick={onClose}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 ${
                                                isActive
                                                    ? "bg-purple-600"
                                                    : "hover:bg-gray-800"
                                            }`
                                        }
                                    >
                                        <Icon size={20}/>
                                        {item.name}
                                    </NavLink>
                                );
                            })}
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}

export default MobileSidebar;