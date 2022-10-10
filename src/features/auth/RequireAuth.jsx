import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { user } = useSelector((state) => state.auth);

  /* Checking if the user is verified, if so, it will render the Outlet component, otherwise it will
  navigate the Home component. */

  /**
   * TODO
   *     - To be changed to redirect user to a verify request page
   */

  return user?.isVerified ? <Outlet /> : <Navigate to="/" />;
};

export default RequireAuth;
