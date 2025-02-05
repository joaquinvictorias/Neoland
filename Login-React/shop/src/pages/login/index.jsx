import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { login } = useAuth();
    const navigate = useNavigate();

    function handleHome() {
        navigate("/");
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        login(formData);
        navigate("/protected");
    }

    return (
        <div className="form-container">
            <form className="login-container" onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="email" name="email" onChange={handleChange} required />
                </label>
                <label>
                    Contraseña
                    <input type="password" name="password" onChange={handleChange} required />
                </label>
                <button type="submit">Enviar</button>
            </form>
            <button type="button" onClick={handleHome}>Home</button>
        </div>
    );
}