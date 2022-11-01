import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import ErrorPage from "./ErrorPage";
import RequireAuth from './auth/RequireAuth';
import Auth from './auth/Auth';
import Login from './pages/login/Login';
import Main from "./pages/main/Main"
import Matching from "./pages/matching/Matching"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main",
    element:
      <RequireAuth>
        <Main />
      </RequireAuth>,
  },
  {
    path: "/matching",
    element:
      <RequireAuth>
        <Matching />
      </RequireAuth>,
  },
  {
    path: "/auth",
    element: <Auth/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
