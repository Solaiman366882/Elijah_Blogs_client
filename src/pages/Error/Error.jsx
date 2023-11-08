import errorImg from '../../assets/images/404.webp'


const Error = () => {
    return (
        <div className="w-full ">
            <img src={errorImg} className="w-full md:h-screen object-cover" alt="" />
        </div>
    );
};

export default Error;