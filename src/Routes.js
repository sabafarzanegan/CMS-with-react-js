import Comments from "./components/Comments/Comments";
import Offs from "./components/Offs/Offs";
import Orders from "./components/Orders/Orders";
import Productes from "./components/Productes/Productes";
import Users from "./components/Users/Users";

const routes = [
  { path: "/productes", element: <Productes /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/offs", element: <Offs /> },
];

export default routes;
