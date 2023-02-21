import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api";
import { toast } from "react-toastify";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await signup({ email, password, username });
      if (response.data.message) {
        toast.info(response.data.message);
      } else {
        toast.success("User created");
      }
      navigate("/login");
    } catch (e) {
      toast.error("Error occurred", e);
    }
  }

  return (
    <>
      <h3>Sign up</h3>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={handleEmailChange} />
        <label htmlFor="username">Username</label>
        <input id="username" type="username" onChange={handleUsernameChange} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={handlePasswordChange} />

        <button type="submit" onClick={handleSubmitForm}>
          Sign up
        </button>
      </form>
      <p>Already have an accout?</p>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Signup;
