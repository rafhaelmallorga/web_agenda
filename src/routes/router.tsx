import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Me from "../pages/Me";
import Register from "../pages/Register";


const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/me" element={<Me/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default Router