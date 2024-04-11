import { MyUserApiCreate } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


const Auth0Callback = () => {
    const navigate = useNavigate()
const {user}=useAuth0()    
const ref= useRef(false)
    const { mutateAsync } = MyUserApiCreate();
    useEffect(()=>{
        if (user?.sub && user?.email && !ref.current) {
            mutateAsync({ auth0Id: user.sub, email: user.email });
            ref.current= true
          }
          navigate("/")
    },[user,mutateAsync,navigate])
  return (
    <div>Loading...</div>
  )
}

export default Auth0Callback