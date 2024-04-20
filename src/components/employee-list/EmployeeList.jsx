
import Navbar from "../navbar/Navbar"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import "./employeeList.css"

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate()

    const getData = async () => {
        await axios.get("http://localhost:8000/all")
            .then(res => {
                setEmployees(res.data);
            })
            .catch(err => console.log(err));
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
            navigate("/")
        }
    }

    useEffect(() => {
        getData()
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/all/${id}`);
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div>Logo</div>
            <Navbar />

            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div div className='w-90 bg-white rounded p-3'>
                    <div className="tableTop">
                        <div className="count">Total Count: {employees.length}</div>
                        <Link to="/create">
                            <button className="btn btn-success">Create Employee</button>
                        </Link>
                        <div>
                            <label htmlFor="">Search: </label>
                            <input type="text" />
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>

                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile No.</th>
                                <th>Designation</th>
                                <th>Gender</th>
                                <th>Course</th>
                                <th>Created Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees && employees.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.f_Image}</td>
                                    <td>{data.f_Name}</td>
                                    <td>{data.f_Email}</td>
                                    <td>{data.f_Mobile}</td>
                                    <td>{data.f_Designation}</td>
                                    <td>{data.f_Gender}</td>
                                    <td>{data.f_Course}</td>
                                    <td>{new Date(data.f_CreatedDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                                    <td>
                                        <Link to={`/update/${data.id}`} className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.id)}>Delete</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}

export default EmployeeList