import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./states";
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider
    config={{
      signInRedirectURL: "https://ddea8870-23c8-48e0-9b36-08a52fa7ef13.e1-us-cdp-2.choreoapps.dev/auth/login/callback",
      signOutRedirectURL: "https://ddea8870-23c8-48e0-9b36-08a52fa7ef13.e1-us-cdp-2.choreoapps.dev/auth/logout/callback",
      clientID: "S259m_8Fm1E_hrEdZmR6lRNFVKga",
      baseUrl: "https://api.asgardeo.io/t/choreocode",
      scope: ["openid", "profile"],
    }}
  >
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
