
const DetailCard = ({ detail }) => {

    const { image, type, description, price } = detail;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="h-[80vh] w-4/5"><img className="w-full" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{type}</h2>
                <p>{description}</p>
                <h1 className="card-actions justify-end">Price: {price}tk</h1>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;