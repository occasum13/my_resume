import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home"
import Info from "../pages/Info"
import Work from "../pages/Work";


const DefaultRoutes = () => {


    return (
    <BrowserRouter>
    <Routes>
        <Route path="*" element ={<App />}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default DefaultRoutes