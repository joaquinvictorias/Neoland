import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Protected() {
    const { logout } = useAuth();
    const navigate = useNavigate("/");

    function handleClick() {
        logout();
    }

    function handleHome() {
        navigate("/");
    }

    return (
        <div>
            <h1>Protected</h1>
            <button onClick={handleClick}>Logout</button>
            <button onClick={handleHome}>Home</button>
        </div>
    );
}