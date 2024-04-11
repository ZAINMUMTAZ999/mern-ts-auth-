import { User, useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

// const url = import.meta.env.VITE_URL_BACKEND;
const url = "http://localhost:9000/api/mern";
type CreateUserType = {
  auth0Id: string;
  email: string;

};
const MyUserApiGet = ()=>{
  const {getAccessTokenSilently}= useAuth0()
  const GetUserRequest = async ():Promise<User>=>{
    const token = await getAccessTokenSilently()
    const response = await fetch (url,{
      method:"GET",
      headers:{
        Authorization:`Bearer ${token}`,
        "Content-Type":"application/json"
      }
    });
    if(!response.ok){
      throw new Error("Error while fetching the Get user details on frontend!")
    }
    return response.json()
  };
  const {data:CurrentUser,isLoading,error} = useQuery("fetchCurrentUser",GetUserRequest);
  if(error){
    toast.error("Error geting user")
  }
  return {
    CurrentUser,isLoading
  }
}

const MyUserApiCreate = () => {
  const { getAccessTokenSilently } = useAuth0();
  const CreateUserRequest = async (user: CreateUserType) => {
    const token = await getAccessTokenSilently();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Error while fetching create user ");
    }
  };
  const { isSuccess, mutateAsync, isLoading } = useMutation(CreateUserRequest);
  return {
    isSuccess,
    mutateAsync,
    isLoading,
  };
};
type UpdateUserType = {

  name: string;
  address: string;
  phoneNumber: string;
};
const MyUserApiUpdate = () => {
  const { getAccessTokenSilently } = useAuth0();
  const UpdateUserRequest = async (user: UpdateUserType) => {
    const token = await getAccessTokenSilently();
    const response = await fetch (url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Error while fetchig the updateUserRequest ");
    }
  };
  const {
    mutateAsync: UpdateUserMuatate,
    isLoading,
    isSuccess,
    error,
  } = useMutation(UpdateUserRequest);
  if (isSuccess) {
    toast.success("Update Success Fully");
  }
  if (error) {
    toast.error("Failed to update the details");
  }
  return {
    UpdateUserMuatate,
    isLoading
  };
};
export { MyUserApiGet,MyUserApiCreate, MyUserApiUpdate };
