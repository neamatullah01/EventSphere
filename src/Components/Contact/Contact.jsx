import { CiLocationOn, CiPhone } from "react-icons/ci";
import { PiClockClockwiseLight } from "react-icons/pi";
import { BsCheck2Square } from "react-icons/bs";
const Contact = () => {
    return (
        <div>
            <h2 className="text-5xl pt-4 font-semibold"><span className="text-[#000080]">Contact</span> <span className="text-[#ff635c]">Us</span></h2>
            <div className="my-3 py-2 grid grid-cols-2 md:grid-cols-4 gap-9">
                <div className="bg-slate-200 rounded-2xl space-y-4 text-center py-8 px-4" data-aos="fade-up-right">
                    <div className="flex justify-center">
                        <CiLocationOn className='text-4xl text-[#ff635c]'></CiLocationOn>
                    </div>
                    <h3 className="text-lg font-medium">Postal Address</h3>
                    <p className="text-[#676767] text-base font-semibold">EventSphere <br /> 85 Fentiman Ave <br /> Ottawa, ON K1S 0T7</p>
                </div>
                <div className="bg-slate-200 rounded-2xl space-y-4 text-center py-8 px-4" data-aos="fade-up-right">
                    <div className="flex justify-center">
                        <PiClockClockwiseLight className='text-4xl text-[#ff635c]'></PiClockClockwiseLight>
                    </div>
                    <h3 className="text-lg font-medium">Phone & E-mail</h3>
                    <p className="text-[#676767] text-base font-semibold">Phone: 1-800-64-38 <br />
                        Fax: 1-800-64-39<br />
                        office@fable.com</p>
                </div>
                <div className="bg-slate-200 rounded-2xl space-y-4 text-center py-8 px-4" data-aos="fade-up-left">
                    <div className="flex justify-center">
                        <CiPhone className='text-4xl text-[#ff635c]'></CiPhone>
                    </div>
                    <h3 className="text-lg font-medium">Open Hours</h3>
                    <p className="text-[#676767] text-base font-semibold">Monday – Friday<br />
                        8.00 am – 5.00 pm<br />
                        Weekend Closed</p>
                </div>
                <div className="bg-slate-200 rounded-2xl space-y-4 text-center py-8 px-4" data-aos="fade-up-left">
                    <div className="flex justify-center">
                        <BsCheck2Square className='text-4xl text-[#ff635c]'></BsCheck2Square>
                    </div>
                    <h3 className="text-lg font-medium">Sessions</h3>
                    <p className="text-[#676767] text-base font-semibold">Mornings, 8 am – 12 noon<br />
                        Afternoons, 1 pm – 5 pm<br />
                        Full Day, 8 am – 5 pm</p>
                </div>

            </div>
        </div>
    );
};

export default Contact;