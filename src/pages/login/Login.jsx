import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginWrapperLeft">
                    <h3 className="loginLogo">Welcome to DEALSDRAY</h3>
                </div>
                <div className="loginWrapperRight">
                    <div className="loginBox">
                        <label htmlFor="" className="loginLabel">Username: </label>
                        <input type="text" placeholder="Username" className="loginInput" />
                        <label htmlFor="" className="loginLabel">Password: </label>
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login