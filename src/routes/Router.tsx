import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layout/BasicLayout";
import ErrorPage from "../ErrorPage";
import Login from "../pages/login/Login";
import Auth from "../auth/Auth";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/ProfilePage";
import GamePage from "../pages/game/PongGame";
import Social from "../pages/social";
import Lobby from "../pages/lobby";
import TFAPage from "../auth/TFAPage";
import Restrict from "../auth/Restrict";
import ArcadeGamePage from "../pages/arcade/ArcadeGame";
import ArcadeGamePage2 from "../pages/arcade2/ArcadeGame";
import Matching from "../pages/matching/Matching";
import Private from "../pages/private";
import Test from "../pages/Test";
import GameRoom from "../pages/ingame";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Restrict>
        <Login />
      </Restrict>
    ),
  },
  {
    path: "/auth",
    element: (
      <Restrict>
        <Auth />,
      </Restrict>
    ),
  },
  {
    path: "/tfa",
    element: (
      <Restrict>
        <TFAPage />,
      </Restrict>
    ),
  },
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "private",
        element: <Private />,
      },
      {
        path: "lobby",
        element: <Lobby />,
      },
      {
        path: "social",
        element: <Social />,
      },
      {
        path: "social/:receiver",
        element: <Social />,
      },
      {
        path: "game",
        element: <GameRoom />,
      },
      {
        path: "arcade",
        element: <ArcadeGamePage />,
      },
      {
        path: "arcade2",
        element: <ArcadeGamePage2 />,
      },
      {
        path: "matching",
        element: <Matching />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
