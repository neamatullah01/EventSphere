import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);

  export default router;