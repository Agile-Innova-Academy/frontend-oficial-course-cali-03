import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"



const PrivateRouters = ({children}) => {
    const {state} = useContext(AuthContext)


   return state?.logged === true ? children : <Navigate to="/login" />
}

export default PrivateRouters