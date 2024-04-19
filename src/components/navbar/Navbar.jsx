import { useNavigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout';
import './navbar.css'

function Navbar() {
    let logout = useLogout()
    const navigate = useNavigate()
    const handleNavigate = (path) => {
        navigate(path);
    };
    return (
        <div className='navbar'>
            <div className="navbarWrapper">
                <div className="navbarLeft">
                    <ul className='navbarListItems'>
                        <li className='navbarListItem' onClick={() => handleNavigate("/admin")}>Home</li>
                        <li className='navbarListItem' onClick={() => handleNavigate("/all")}>Employee List</li>
                    </ul>
                </div>
                <div className="navbarRight">
                    <ul className='navbarListItems'>

                        <li className='navbarListItem'> < button onClick={logout}>Logout</button> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar