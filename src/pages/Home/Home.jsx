
import Banner from "../../component/Banner/Banner";
import NewsLetter from "../../component/NewsLetter/NewsLetter";
import RecentBlog from "../../component/RecentBlog/RecentBlog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto px-20">
                <RecentBlog></RecentBlog>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;