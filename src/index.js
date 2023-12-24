import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientId } from "./config";
// import { useGoogleLogin } from "@react-oauth/google";
import { AppProvider } from "./context/store";
import { FacebookProvider,  } from "react-facebook";
import { FACEBOOK_APP_ID } from "./config";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
    <GoogleOAuthProvider clientId={clientId}>
    <FacebookProvider appId={FACEBOOK_APP_ID}>
               
      <App />

      </FacebookProvider>
    </GoogleOAuthProvider>
      </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
