import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>)
  },
  {
    path: ":id",
    element: (<Home/>)
  }
])

export default routes