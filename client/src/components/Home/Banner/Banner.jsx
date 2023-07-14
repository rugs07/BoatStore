import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return ( 
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                Welcome to our premier Boat-Store, your one-stop destination for all things boating. Browse through our extensive collection of high-quality products, carefully curated to cater every enthusiast's needs. With our user-friendly interface and secure payment options, purchasing your dream Boat product has never been easier. Experience the joy of owning a top-notch vessel and embark on thrilling adventures.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Show Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt=""/>
        </div>
    </div>
    );
};

export default Banner;
