import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "../../Components/DetailCard/DetailCard";

const Details = () => {
    const allData = useLoaderData()
    const {id} = useParams()
    const [detail, setDetail] = useState({});

    useEffect(()=>{
        const findDetail = allData.find(detail => detail.id === id)
        setDetail(findDetail);
    },[id,allData])

    console.log(detail,id, allData)

    return (
        <div>
            <DetailCard detail = {detail}></DetailCard>
        </div>
    );
};

export default Details;