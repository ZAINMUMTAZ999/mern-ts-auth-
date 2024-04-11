import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Auth0Callback from "./auth0/Auth0Callback";
import UserProfileForm from "./forms/UserProfileForm";
// import AuthCallbck from "./auth0/AuthCallbck";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>} />
      <Route path="/auth-callback" element={<Auth0Callback/>} /> 
      <Route path="/profile" element={<UserProfileForm/>} /> 
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};

export default AppRoutes;
