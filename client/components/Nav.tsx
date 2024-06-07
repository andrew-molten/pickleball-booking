import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  function handleSignOut() {
    logout()
  }
  
  function handleSignIn() {
    loginWithRedirect()
  }

  return (
    <div className="nav-container">
      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign Out</button>
        {user && <p>Signed in as: {user?.nickname}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign In</button>
      </IfNotAuthenticated>
    </div>
  )
}