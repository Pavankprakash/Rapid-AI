import { useUser } from "@clerk/clerk-react";
function TestUser() {
    const { user } = useUser();
    return (
        <div className="p-10">
            <h1>{user?.fullName}</h1>
            <p>{user?.primaryEmailAddress?.emailAddress}</p>
            <p>{user?.id}</p>
        </div>
    );
}

export default TestUser;