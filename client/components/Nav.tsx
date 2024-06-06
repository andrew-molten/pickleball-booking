import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
  const { user } = useAuth0()

  function handleSignOut() {
    console.log('sign out')
  }

  function handleSignIn() {
    console.log('sign in')
  }

  return (
    <div>
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