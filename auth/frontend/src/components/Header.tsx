import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
    const {loginWithRedirect,logout,isAuthenticated,user}=useAuth0()
  return (
      <div className='flex '>
        <div className='flex flex-1'>
        
            {
                isAuthenticated? 
<>
<Button onClick={()=>logout()}>
  <p className='text-white'>
logout
  </p>
  </Button>
 <p className="font-extrabold text-white">
   {user?.email}
   (logged) 
  </p>
</>
                :



            <Button className='hover:text-2xl'
            
            onClick={async()=>await loginWithRedirect()}
            >Login</Button>
            }


        </div>
    </div>
  )
}

export default Header