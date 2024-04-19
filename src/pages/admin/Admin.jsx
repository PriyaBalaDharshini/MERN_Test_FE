import "./admin.css"
import Navbar from "../../components/navbar/Navbar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Admin() {

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
            navigate("/")
        }
    }, [])

    const handleClick = () => {
        navigate("/create")
    }
    return (
        <>
            <div className="log">Logo</div>
            <Navbar />

            <div className="admin">
                <h4>Welcome to Admin Pannel</h4>
                <button className="btn btn-success d-flex align-item-center justify-content-center" onClick={handleClick}>Create Employee</button>
            </div>

        </>
    )
}

export default Admin