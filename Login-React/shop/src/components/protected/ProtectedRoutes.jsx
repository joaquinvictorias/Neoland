import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function ProtectedRoutes({ children }) {
    const { user } = useAuth();

    if (!user) {
        return (
            <Navigate to="/login" />
        );
    }
    return children;
}