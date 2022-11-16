import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import ErrorPage from "./ErrorPage";
import RequireAuth from './auth/RequireAuth';
import Auth from './auth/Auth';
import Login from './pages/login/Login';
import Home from "./pages/home/Home"
import Matching from "./pages/matching/Matching"
import GlobalStyle from './GlobalStyle';
import Profile from "./pages/profile/ProfilePage"
import Header from './Header';
import Footer from './Footer';
import GamePage from './pages/game/PongGame';
import Social from './pages/social';
import Lobby from './pages/lobby';

const BasicLayout = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            } />
          <Route path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth >
            } />
          <Route path="/lobby"
            element={
              <RequireAuth>
                <Lobby />
              </RequireAuth >
            } />
          <Route path="/game"
            element={
              <RequireAuth>
                <GamePage />
              </RequireAuth >
            } />
          <Route path="/social"
            element={
              <RequireAuth>
                <Social />
              </RequireAuth >
            } />
        </Routes>
      <Footer />
    </>
  )
}

const WideLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <Auth/>,
  },
  {
    path:"/matching",
    element:
      <RequireAuth>
        <Matching />
      </RequireAuth>,
  },
  {
    path: "/*",
    element: <BasicLayout />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </React.StrictMode>
)
