import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthPage = (props) => {
  const userSelector = useSelector((state) => state.user);

  if (!userSelector.id) {
    return <Navigate to="/login" />;
  }

  return props.children;
};
