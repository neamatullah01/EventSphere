import { FaSearch } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='relative'>
            <div className="carousel w-full h-[78vh] rounded-md">
                <div id="slide1" className="carousel-item relative w-full">
                    
                    <img src="https://i.ibb.co/N6NQMmc/birthday-celebrations-with-screaming-friends.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2SNTckG/Closeup-shot-wedding.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/4mSqLdm/pexels-alex-tim-754953.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/KwKfNqg/groom-putting-ring-bride-s-finger.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 md:gap-0 justify-around items-center w-full md:w-3/4 bg-[#000080] md:h-36 rounded-xl absolute -bottom-12 md:left-32">
                <div className="space-y-2">
                    <h3 className="text-white text-base font-normal">Looking for</h3>
                    <select className="select w-full max-w-xs">
                        <option disabled selected>Choose event type</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <h3 className="text-white text-base font-normal">Location</h3>
                    <select className="select w-full max-w-xs">
                        <option disabled selected>Choose location</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <h3 className="text-white text-base font-normal">When</h3>
                    <select className="select w-full max-w-xs">
                        <option disabled selected>Choose date and time</option>
                    </select>
                </div>
                <button className='bg-red-500 w-16 h-16 rounded-md'>
                    <FaSearch className='w-full'></FaSearch>
                </button>
            </div>
        </div>
    );
};

export default Banner;