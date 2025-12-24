
import { Navigate } from "react-router-dom";

const StudentProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("studentToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default StudentProtectedRoute;

