import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CarsComponent from "./Components/HomeComponent";
import BottomAppBar from "./Components/BottomAppBar";
import houses from "../src/Data.json";


function App() {
 
  const route = createBrowserRouter([
    {
      path: "/",
      element: <CarsComponent />,

    },
  ]);

  return (
    
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App;

// /home/abhi