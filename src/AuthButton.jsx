import { useIsAuthenticated, useMsal } from "@azure/msal-react";

export const AuthButton = () => {
  const { instance } = useMsal({
    scopes: ["User.Read"]
  });

  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (
    <button onClick={() => instance.logout()}>Sign Out</button>
  ) : (
    <button onClick={() => instance.loginPopup()}>Sign In</button>
  );
};