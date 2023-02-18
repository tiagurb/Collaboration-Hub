import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";
import { toast } from "react-toastify";
import { UserContext } from "../context/user.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authenticateUser } = useContext(UserContext);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem("authToken", response.data);
      // Setting the loged user in the context
      authenticateUser();
      toast.success("User logged in in");
      navigate("/");
    } catch (e) {
      toast.error("Error occurred", e);
    }
  }

  return (
    <>
      <h3>Login</h3>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={handleEmailChange} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={handlePasswordChange} />

        <button type="submit" onClick={handleSubmitForm}>
          Login
        </button>
      </form>
      <p>Don't have an account?</p>
      <Link to="/signup">Signup</Link>
    </>
  );
}

export default Login;
