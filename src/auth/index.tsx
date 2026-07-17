import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const token = sessionStorage.getItem("AccessToken");

  if (token) {
    return children;
  }

  let refreshToken = localStorage.getItem("RefreshToken");
  if (refreshToken) {
    //TODO try get access token and push
  }

  return <Navigate to="/login" replace />;
}

export default AuthGuard;
