import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientId } from "./config";
import { AppProvider } from "./context/store";
import { FacebookProvider } from "react-facebook";
import { FACEBOOK_APP_ID } from "./config";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <GoogleOAuthProvider clientId={clientId}>
          <FacebookProvider appId={FACEBOOK_APP_ID}>
            <App />
          </FacebookProvider>
        </GoogleOAuthProvider>
        <ToastContainer />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
