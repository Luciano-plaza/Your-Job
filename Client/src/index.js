import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { persistor, store } from "./Redux/Stores/Store";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001/";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-clxn9t-m.us.auth0.com"
          clientId="gqWuEgS6f3ZbS4YORxOto42gTeinqtu1"
          // redirectUri="https://your-job-seven.vercel.app/home"
          // redirectUri="http://localhost:3000/home"
          redirectUri={window.location.origin}
        >
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Auth0Provider>
      </React.StrictMode>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
