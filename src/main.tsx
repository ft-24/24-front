import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

import GlobalStyle from "./constants/GlobalStyle";
import { AuthContextProvider } from "./context/AuthContext";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root Element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
  </>
  // </React.StrictMode>
);
  