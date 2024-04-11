import UserForm from './UserForm'
import { MyUserApiUpdate,MyUserApiGet} from '@/api/MyUserApi'

const UserProfileForm = () => {
    const {isLoading:getLoading,CurrentUser}=MyUserApiGet()
const  {UpdateUserMuatate,isLoading:updateLoading}=    MyUserApiUpdate()
if(getLoading){
    <>Loading...
    </>
}
// if(!CurrentUser){
//     <>Unable to refatch</>
// }
  return (
    <UserForm CurrentUser={CurrentUser}  onSave={UpdateUserMuatate} isLoading={updateLoading} />
  )
}

export default UserProfileForm