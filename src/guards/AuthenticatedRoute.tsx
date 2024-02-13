import { Navigate, useLocation } from "react-router-dom";

import { PropsWithChildren } from "react";
import UserType from "./UserType";

interface AuthenticatedRouteProps {
  role: UserType;
  fallbackRoute: string;
}

export default function AuthenticatedRoute({
  role,
  fallbackRoute,
  children,
}: PropsWithChildren<AuthenticatedRouteProps>) {
  const user = localStorage.getItem('user');
  const userData = JSON.parse(user??"");
  const location = useLocation();

  if (!userData || userData.userType !== role) {
    return <Navigate to={fallbackRoute} state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
