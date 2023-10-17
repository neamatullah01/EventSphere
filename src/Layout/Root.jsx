import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div className="max-w-7xl py-3 mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;