import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Redirect from "../pages/Redirect";
import Stats from "../pages/Stats";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>)
  },
  {
    path: ":id",
    element: (<Redirect/>)
  },
  {
    path: ":id/stats",
    element: (<Stats/>)
  }
])

export default routes