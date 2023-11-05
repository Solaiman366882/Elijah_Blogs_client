import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div>this is main layout</div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;