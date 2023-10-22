import { lazy } from "react";
// const DemoPage = lazy(() => import("../pages/Demo/DemoPage"));
const HomePage = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));


const routes = [
    {
        path: "/",
        component: HomePage,
      },
      {
        path: "/home",
        component: HomePage,
      },
      {
        path: "/about",
        component: About,
      },
     
];
export default routes;