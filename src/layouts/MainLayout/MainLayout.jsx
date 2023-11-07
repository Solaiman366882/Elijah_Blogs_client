import { Outlet } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;