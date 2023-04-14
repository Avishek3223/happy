import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import ContextProvider from "./Context/ContextProvider";
import "./index.css";
import App from "./App";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "us-east-2",
    userPoolId: "us-east-2_9joxeJ5EP",
    identityPoolId: "us-east-2:fcc57a23-9e12-4bd0-9266-3fa44581bebe",
    userPoolWebClientId: "5ej5844tf42rf77slua0a8q9o3",
    oauth: {
      // domain: `${"gymnaism-harshnew-auth-domain.auth.ap-south-1.amazoncognito.com"}`,
      // scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
      // redirectSignIn: "http://localhost:3000",
      // redirectSignOut: "http://localhost:3000",
      // redirectSignIn: "https://gymnaism.netlify.app",
      // redirectSignOut: "https://gymnaism.netlify.app",
      responseType: "token",
    },
  },
  // Storage: [
  //   {
  //     region: "ap-south-1",
  //     bucket: "harshairborn-gymnaism-me-useraccessbucketc6094d94-jlf4r2t4q6wz",
  //     identityPoolId: "ap-south-1:68cc0fa6-065b-4bff-b41b-07751bb8609b",
  //   },
  // ],
  API: {
    endpoints: [
      {
        name: "user",
        endpoint: "https://7sh8wrjmm2.execute-api.us-east-1.amazonaws.com/dev",
        region: "us-east-1",
      },
    ],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
