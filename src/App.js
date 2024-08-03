import { useState } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Recepie from "./Component/Recepie";
import Home from "./Component/Home";
import RecipeList from "./Component/RecipeList";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import { DataContextProvider } from "./context/Context";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/foods", element: <RecipeList /> },
      { path: "/recipes/:recipeId", element: <Recepie /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
