import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import MyBooking from "../../Pages/MyBooking/MyBooking";
import Review from "../../Pages/Review/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add_services",
        element: <AddServices />,
      },
      {
        path: "/review/:id",
        element: <Review />,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/services/${params.id}`),
      },
      {
        path: "/booking",
        element: <MyBooking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
