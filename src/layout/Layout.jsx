import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto my-8">
            <Outlet />
        </div>
    );
};

export default Layout;