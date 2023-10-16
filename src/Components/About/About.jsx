import { HiOutlineHomeModern } from 'react-icons/hi2';
import { LuMessagesSquare } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";
const About = () => {
    return (
        <div>
            <h2 className="text-5xl font-semibold"><span className="text-[#000080]">About</span> <span className="text-[#ff635c]">Us</span></h2>
            <div className="my-6 py-9 bg-slate-200 shadow rounded-md space-y-8">
                <h1 className="text-5xl font-medium text-center"><span className="text-[#fcb41e]">Hello!</span> We Are an Event Planning Agency</h1>
                <div className="flex justify-center">
                    <p className="text-lg text-center font-semibold w-3/6">As the premier event planning company in New York City, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
                </div>
                <div className='flex justify-around items-center'>
                    <div className='space-y-3'>
                        <div className='flex justify-center'>
                            <HiOutlineHomeModern className='text-6xl text-[#ff635c]'></HiOutlineHomeModern>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-lg w-4/5 text-center'>Find the perfect venue for free</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='w-6 bg-[#fcb41e] text-white text-center rounded-full font-bold'>1</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex justify-center'>
                            <LuMessagesSquare className='text-6xl text-[#ff635c]'></LuMessagesSquare>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-lg w-4/5 text-center'>Connect with the best vendor</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='w-6 bg-[#fcb41e] text-white text-center rounded-full font-bold'>2</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex justify-center'>
                            <FiEdit className='text-6xl text-[#ff635c]'></FiEdit>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-lg w-4/5 text-center'>Let us help you with the event</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='w-6 bg-[#fcb41e] text-white text-center rounded-full font-bold'>3</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex justify-center'>
                            <GiPartyPopper className='text-6xl text-[#ff635c]'></GiPartyPopper>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-lg w-4/5 text-center'>Enjoy the party with your friends</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='w-6 bg-[#fcb41e] text-white text-center rounded-full font-bold'>4</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;