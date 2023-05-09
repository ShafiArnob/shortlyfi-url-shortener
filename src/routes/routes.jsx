import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Redirect from "../pages/Redirect";
import Stats from "../pages/Stats";
import { RedirectMsg } from "../components/RedirectMsg";

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
    element: <Stats/>
  },
  {
    path: "*",
    element: <RedirectMsg message={"Page Not Found"}/>
  }
])

export default routes