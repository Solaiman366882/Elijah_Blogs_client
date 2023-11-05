import { Outlet } from "react-router-dom";
import Header from "../../component/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="max-w-screen-xl mx-auto px-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;