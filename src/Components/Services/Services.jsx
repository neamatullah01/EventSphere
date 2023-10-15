import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const Services = () => {

    const [allData, setAllData] = useState([]);
    useEffect(()=>{
        fetch('/data.JSON')
        .then(res =>res.json())
        .then(data =>setAllData(data));
    },[])

    return (
        <div>
            <h2 className="text-5xl font-semibold">Our <span className="text-red-500">Services</span></h2>
            <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    allData.map(data=><Cards key={data.id} data={data}></Cards>)
                }
            </div>
        </div>
    );
};

export default Services;