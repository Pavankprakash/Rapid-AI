import { SignUp } from "@clerk/clerk-react";

function SignUpPage() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <SignUp />
        </div>
    );
}

export default SignUpPage;