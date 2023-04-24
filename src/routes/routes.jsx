import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Redirect from "../pages/Redirect";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>)
  },
  {
    path: ":id",
    element: (<Redirect/>)
  }
])

export default routes