 import './Banner.css';
 import hero1 from '../../assets/images/hero_element_1.webp'
 import hero2 from '../../assets/images/hero_element_2.webp'
 import hero3 from '../../assets/images/hero_element_3.webp'

const Banner = () => {
    return (
        <section className="banner-section">
            <div className='max-w-screen-xl mx-auto px-5'>
               <div className="hero-area w-1/2 h-full flex justify-end items-center">
                    <h1>In depth <img src={hero1} className="inline" alt="" /> resource on UI, UX and everything <img src={hero2} className="inline" alt="" />in <img src={hero3} className="inline" alt="" /> between.</h1>
               </div>
            </div>
        </section>
    );
};

export default Banner;