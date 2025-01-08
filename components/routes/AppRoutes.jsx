import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
import Hero from "./Hero";
import LoginPage from "./LoginPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<LoginPage/>
    },
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path:"/home",
                element:<Hero/>
            },
            {
            path:"/home/about",
            element:<About/>
            },
            {
            path:"/home/contact",
            element:<Contact/>
            },
            {
            path:"/home/help",
            element:<Help/>
            }
        ]
    }
])