import Home from "views/Home";
import Fact from "views/Fact";

const indexRoutes = [
    { path: "/fact/:category", component: Fact },
    { path: "/", component: Home },
];

export default indexRoutes;
