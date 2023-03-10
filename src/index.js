import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProviderWrapper } from "./context/user.context";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserProviderWrapper>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </UserProviderWrapper>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
