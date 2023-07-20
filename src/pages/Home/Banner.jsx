import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (

        // This is Carousel Home Banner
        <Carousel className='text-slate-400 -z-50 font-bold'>
            <div
                className="hero lg:min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/fQQ2jdS/R-4.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex flex-col justify-center items-center h-full">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"></h1>
                        <p className="mb-5 text-2xl">
                            The Complete <span className="text-orange-400">House Hunter </span>
                            Online  Platform
                        </p>
                        <button className="btn bg-orange-600 p-2 rounded-lg btn-primary">Booking House</button>
                    </div>
                </div>
            </div>
            <div
                className="hero lg:min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/fQQ2jdS/R-4.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex flex-col justify-center items-center h-full">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"></h1>
                        <p className="mb-5 text-2xl">
                            The Complete <span className="text-orange-400">House Hunter </span>
                             Online Platform
                        </p>
                        <button className="btn bg-orange-600 p-2 rounded-lg btn-primary">Booking House</button>
                    </div>
                </div>
            </div>
            <div
                className="hero lg:min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/fQQ2jdS/R-4.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex flex-col justify-center items-center h-full">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"></h1>
                        <p className="mb-5 text-2xl">
                            The Complete <span className="text-orange-400">House Hunter</span>
                              Online Platform
                        </p>
                        <button className="btn bg-orange-600 p-2 rounded-lg btn-primary">Booking House</button>
                    </div>
                </div>
            </div>
        </Carousel>



    );
};

export default Banner;