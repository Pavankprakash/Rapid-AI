import { FiX } from "react-icons/fi";
import Sidebar from "../dashboard/Sidebar";

function MobileSidebar({ isOpen, setIsOpen }) {

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
            />

            <div className="fixed left-0 top-0 h-full w-72 z-50 lg:hidden">

                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-4 bg-white rounded-full p-2 shadow"
                >
                    <FiX size={22}/>
                </button>

                <Sidebar/>

            </div>
        </>
    );
}

export default MobileSidebar;