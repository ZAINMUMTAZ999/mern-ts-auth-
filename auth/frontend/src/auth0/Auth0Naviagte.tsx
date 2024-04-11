import React from "react";
import { Auth0Provider} from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
const Auth0Naviagte = ({ children }: Props) => {
    const navigate = useNavigate()
  
  const domain = import.meta.env.VITE_DOMAN_AUTH0;
  const clientId = import.meta.env.VITE_CLIENTID_AUTH0;
  const url = import.meta.env.VITE_URL;
  const audience = import.meta.env.VITE_AUDIENCE
  console.log(audience)
  if (!(domain || clientId || url || audience)) {
    throw new Error("Unable to initialize Auth0");
  }
  const OnRedirect = () => {

navigate("/auth-callback")
    
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: url,
        audience
      }}
      onRedirectCallback={OnRedirect}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0Naviagte;
