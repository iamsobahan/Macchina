import { useContext } from "react";
import { AuthContext } from "../Componenets/Authprovider/Authprovider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
