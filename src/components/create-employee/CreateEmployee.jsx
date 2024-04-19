import "./createEmployee.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEmployee() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [courses, setCourses] = useState([]);
    const [date, setDate] = useState("");

    const navigate = useNavigate()

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCourses([...courses, value]);
        } else {
            setCourses(courses.filter(course => course !== value));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_BE_URL}/create`, {
            f_Image: image,
            f_Name: name,
            f_Email: email,
            f_Mobile: mobile,
            f_Designation: designation,
            f_Gender: gender,
            f_Course: courses,
            f_CreatedDate: date
        })
            .then(res => {
                console.log(res);
                navigate("/all")
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="log">Logo</div>
            <Navbar />
            <h4>Create Employee</h4>
            <div className="create ">
                <div className="createWrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="inputItems">
                            <label className="inputLabel" htmlFor="name">Name: </label>
                            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div className="inputItems">
                            <label className="inputLabel" htmlFor="email">Email: </label>
                            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="inputItems">
                            <label className="inputLabel" htmlFor="mobile">Mobile No.: </label>
                            <input type="text" id="mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                        </div>

                        <div className="inputItems">
                            <label className="inputLabel" htmlFor="designation">Designation: </label>
                            <select id="designation" value={designation} onChange={e => setDesignation(e.target.value)}>
                                <option value="">Select</option>
                                <option value="HR">HR</option>
                                <option value="Manager">Manager</option>
                                <option value="Sales">Sales</option>
                            </select>
                        </div>

                        <div className="inputItems">
                            <label className="inputLabel" htmlFor="gender">Gender:</label>
                            <input type="radio" id="femaleRadio" name="gender" value="Female" onChange={e => setGender(e.target.value)} checked={gender === "Female"} /> Female
                            <input type="radio" id="maleRadio" name="gender" value="Male" onChange={e => setGender(e.target.value)} checked={gender === "Male"} /> Male
                        </div>

                        <div className="inputItems">
                            <label className="inputLabel">Course:</label>

                            <input type="checkbox" id="mcaCheckbox" name="course" value="MCA" onChange={handleCheckboxChange} />
                            <label htmlFor="mcaCheckbox" className="box">MCA</label>

                            <input type="checkbox" id="bcaCheckbox" name="course" value="BCA" onChange={handleCheckboxChange} />
                            <label htmlFor="bcaCheckbox" className="box">BCA</label>

                            <input type="checkbox" id="bscCheckbox" name="course" value="BSC" onChange={handleCheckboxChange} />
                            <label htmlFor="bscCheckbox" className="box">BSC</label>
                        </div>

                        <div className="inputItems">
                            <label className="inputLabel" htmlFor="imageUpload">Upload Image: </label>
                            <input type="file" id="imageUpload" accept="image/png, image/jpeg" onChange={handleImageChange} />

                        </div>
                        <div className="inputItems">
                            <label className="inputLabel" htmlFor="date">Created Date: </label>
                            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>

                        <button type="submit" className="button">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateEmployee;
