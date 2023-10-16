import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div>
            <div className="py-3 md:mb-7">
                <Banner></Banner>
            </div>
            <div className="mt-10 md:mt-14 py-5">
                <Services></Services>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;