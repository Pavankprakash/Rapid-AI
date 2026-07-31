import { Link } from "react-router-dom";
import { useState } from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                { /**Loop */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        R
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">
                            Rapid AI
                        </h1>

                        <p className="text-xs text-gray-500 -mt-1">
                            AI Productivity Suite
                        </p>
                    </div>
                </div>
                { /*Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">

                    <a href="#" className="hover:text-purple-600">
                        Features
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        Pricing
                    </a>
                    <Link
                        to="/dashboard"
                        className="hover:text-purple-600"
                    >
                        Dashboard
                    </Link>

                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="text-gray-700">
                                Login
                            </button>
                        </SignInButton>

                        <SignUpButton mode="modal">
                            <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700">
                                Get Started
                            </button>
                        </SignUpButton>

                    </SignedOut>

                    <SignedIn>
                        <div className="flex items-center gap-3">
                            <UserButton afterSignOutUrl="/" />
                            <div className="hidden xl:block">

                                <p className="font-semibold">
                                    Dashboard
                                </p>
                                <p className="text-xs text-gray-500">
                                    Welcome back
                                </p>
                            </div>
                        </div>
                    </SignedIn>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden"
                >
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 py-6" : "max-h-0"}`}>

                    <div className="flex flex-col gap-5 px-6">
                        <a href="#">Features</a>
                        <a href="#">About</a>

                        <Link
                        to="/dashboard"
                        className=" relative font-medium text-gray-600 hover:text-purple-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all hover:after:w-full"
                    >
                        Dashboard
                    </Link>
                    </div>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="px-4 py-2 rounded-xl border border-gray-300 hover:border-purple-500 hover:text-purple-600 transition">
                                Login
                            </button>
                        </SignInButton>

                        <SignUpButton mode="modal">
                            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                                Get Started
                            </button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>
            )}

        </nav>
    );
}
export default Navbar;