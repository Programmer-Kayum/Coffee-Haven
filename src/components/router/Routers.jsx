import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import AddCoffee from "../AddCoffee/AddCoffee";
import UpdateCoffee from "../UpdateCoffee/UpdateCoffee";
import LayOut from "../Layout/LayOut";
import Coffee from "../Coffee/Coffee";
import CoffeeDetails from "../Coffee/CoffeeDetails";
import Order from "../Oreder/Order";
import Card from "../Card/Card";
import Login from "../security/Login/Login";
import RegistrationForm from "../security/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import User from "../../User/User";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
      },
      {
        path: "/card",
        element: <Card></Card>,
      },
      {
        path: "/coffee",
        element: <Coffee></Coffee>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },

      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/coffees/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/reg",
        element: <RegistrationForm></RegistrationForm>,
      },
      {
        path: "/user",
        element: <User></User>,
        loader: () => fetch("http://localhost:5000/user"),
      },
    ],
  },
]);

export default router;
