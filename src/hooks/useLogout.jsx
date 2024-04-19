import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    let navigate = useNavigate()

    return () => {

        localStorage.clear()
        navigate('/')
    }
}