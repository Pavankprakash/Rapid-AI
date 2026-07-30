import { SignIn } from "@clerk/clerk-react";

function SignInPage(){
    return (
        <div className="min--h-screen flex justify-center items-center bg-gray-100">
            <SignIn />
        </div>
    );
}

export default SignInPage;