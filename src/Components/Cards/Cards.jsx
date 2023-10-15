
const Cards = ({ data }) => {
    const { type, description, image, price } = data;
    return (
        <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div style={{ backgroundImage: `url(${image})` }} className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 py-10 px-6 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    {description}
                </h2>
                <h5 className="mb-1 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                    {type}
                </h5>
                <h5 className="mb-4 block font-sans text-lg font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                    Price: {price}tk
                </h5>
                <button className="relative btn btn-secondary bg-[#000080] border-0 object-cover object-center">See Details</button>
                
            </div>
        </div>
    );
};

export default Cards;