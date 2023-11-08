
import Banner from "../../component/Banner/Banner";
import NewsLetter from "../../component/NewsLetter/NewsLetter";
import PopularTags from "../../component/PopularTags/PopularTags";
import Pricing from "../../component/Pricing/Pricing";
import RecentBlog from "../../component/RecentBlog/RecentBlog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto px-20">
                <RecentBlog></RecentBlog>
                <PopularTags></PopularTags>
                <NewsLetter></NewsLetter>
                <Pricing></Pricing>
            </div>
        </div>
    );
};

export default Home;