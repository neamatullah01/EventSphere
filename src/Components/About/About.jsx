import { HiOutlineHomeModern } from 'react-icons/hi2';
const About = () => {
    return (
        <div>
            <h2 className="text-5xl font-semibold"><span className="text-[#000080]">About</span> <span className="text-red-500">Us</span></h2>
            <div className="my-6 py-9 bg-slate-200 shadow rounded-md space-y-7">
                <h1 className="text-5xl font-medium text-center"><span className="text-[#fcb41e]">Hello!</span> We Are an Event Planning Agency</h1>
                <div className="flex justify-center">
                    <p className="text-lg text-center font-semibold w-3/6">As the premier event planning company in New York City, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
                </div>
                <div className='flex justify-around items-center'>
                    <div>
                        <div className='flex justify-center'>
                            <HiOutlineHomeModern className='text-7xl text-[#ff635c]'></HiOutlineHomeModern>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-lg w-4/5 text-center'>Find the perfect venue for free</p>
                        </div>
                        <p className='text-center'>1</p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <HiOutlineHomeModern className='text-7xl text-[#ff635c]'></HiOutlineHomeModern>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-lg w-4/5 text-center'>Find the perfect venue for free</p>
                        </div>
                        <p className='text-center'>1</p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <HiOutlineHomeModern className='text-7xl text-[#ff635c]'></HiOutlineHomeModern>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-lg w-4/5 text-center'>Find the perfect venue for free</p>
                        </div>
                        <p className='text-center'>1</p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <HiOutlineHomeModern className='text-7xl text-[#ff635c]'></HiOutlineHomeModern>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-lg w-4/5 text-center'>Find the perfect venue for free</p>
                        </div>
                        <p className='text-center'>1</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default About;