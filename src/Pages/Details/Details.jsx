import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const allData = useLoaderData();
    const {id} = useParams();
    console.log(allData, id)
    return (
        <div>
            <h2>Details coming</h2>
        </div>
    );
};

export default Details;