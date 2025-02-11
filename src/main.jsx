import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home/Home.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Films from './pages/Films/Films.jsx';
import AppNavbar from './components/AppNavbar.jsx';
import AppFooter from "./components/AppFooter.jsx";
import FilmDetails from './pages/FilmDetails/FilmDetails.jsx';

function AppLayout() {
  return (
    <>
      <AppNavbar />
      <Outlet />
      <AppFooter />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/films",
        element: <Films />,
      },
      {
        path: "/films/:id",
        element: <FilmDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);