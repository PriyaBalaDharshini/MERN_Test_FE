import { useNavigate } from "react-router-dom"
import "./login.css"
import { useState } from "react"
import axios from "axios"

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8000/", { username, password });
            console.log(response.data.message);
            localStorage.setItem("token", response.data.token)
            navigate("/admin");
        } catch (error) {
            console.log(error);
            setErrorMessage("Invalid username or password"); // Set error message
        }
    }
    const handleRegister = () => {
        navigate("/register")
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginWrapperLeft">
                    <h3 className="loginLogo">Welcome to DEALSDRAY</h3>

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
                        <button className="loginButton" onClick={handleLogin}>Login</button>
                        <button className="loginRegister" onClick={handleRegister}>Register</button>
                        {errorMessage && <span className="errorMessage">{errorMessage}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login