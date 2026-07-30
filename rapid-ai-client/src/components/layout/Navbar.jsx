import { Link } from "react-router-dom";
import { useState } from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="w-full border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                { /**Loop */}
                <h1 className="text-xl md:text-2xl font-bold text-purple-600">
                    Rapid AI
                </h1>

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
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-6 flex flex-col gap-4">

                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <Link
                        to="/dashboard"
                        className="hover:text-purple-600"
                    >
                        Dashboard
                    </Link>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="text-left">
                                Login
                            </button>
                        </SignInButton>

                        <SignUpButton mode="modal">
                            <button className="bg-purple-600 text-white rounded-lg py-2">
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