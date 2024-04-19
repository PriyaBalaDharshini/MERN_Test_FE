import { useNavigate } from "react-router-dom"
import "./register.css"
import { useState } from "react"
import axios from "axios"

function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BE_URL}/register`, { username, password });
            console.log(response.data.message);
            navigate("/")
        } catch (error) {
            console.error(error.response.data.message);
        }
    }
    const handleLogin = () => {
        navigate("/");
    };
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginWrapperLeft">
                    <h3 className="loginLogo">Welcome to DEALSDRAY</h3>
                    <h3 className="loginLogo"> Register Page</h3>
                </div>
                <div className="loginWrapperRight">
                    <div className="loginBox">
                        <label htmlFor="" className="loginLabel">Username: </label>
                        <input type="text"
                            placeholder="Username"
                            className="loginInput"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="" className="loginLabel">Password: </label>
                        <input type="password"
                            placeholder="Password"
                            className="loginInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <button className="loginButton" onClick={handleRegister}>Register</button>
                        <button className="loginRegister" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register