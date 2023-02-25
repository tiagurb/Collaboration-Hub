import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { useContext } from "react";
import { Button } from "@chakra-ui/react";

function Navbar() {
  const { loggedUser, logout } = useContext(UserContext);

  return (
    <>
      <nav>
        <div>
          {loggedUser ? (
            <div>
              <p>Welcome {loggedUser.username}</p>
              <div>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </div>
              <Button onClick={logout}>Logout</Button>
            </div>
          ) : (
            <>
              <div>
                <NavLink to="/login">Login</NavLink>
              </div>
              <div>
                <NavLink to="/signup">Signup</NavLink>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
