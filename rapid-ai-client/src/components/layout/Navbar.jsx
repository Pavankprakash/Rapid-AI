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
                        About
                    </a>
                    <Link
                        to="/dashboard"
                        className="hover:text-purple-600">
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
                <div className="lg:hidden border-t bg-white">
                    <div className="flex flex-col px-6 py-6">

                        {/* Features */}
                        <a
                            href="#features"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition"
                        >
                            Features
                        </a>

                        {/* About */}
                        <a
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition"
                        >
                            About
                        </a>

                        {/* Dashboard */}
                        <Link
                            to="/dashboard"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition"
                        >
                            Dashboard
                        </Link>

                        <hr className="my-3" />

                        {/* Authentication */}
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="w-full border rounded-xl py-3">
                                    Login
                                </button>
                            </SignInButton>

                            <SignUpButton mode="modal">
                                <button className="w-full rounded-xl py-3 bg-purple-600 text-white mt-3">
                                    Get Started
                                </button>
                            </SignUpButton>
                        </SignedOut>

                        {/* Logged In */}
                        <SignedIn>
                            <div className="flex items-center gap-3 px-4 py-3">
                                <UserButton afterSignOutUrl="/" />

                                <div>
                                    <p className="font-semibold">
                                        Dashboard
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Welcome back
                                    </p>
                                </div>
                            </div>
                        </SignedIn>

                    </div>
                </div>
            )}
        </nav>
    );
}
export default Navbar;