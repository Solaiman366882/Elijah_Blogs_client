
import Banner from "../../component/Banner/Banner";
import NewsLetter from "../../component/NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto px-20">
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;