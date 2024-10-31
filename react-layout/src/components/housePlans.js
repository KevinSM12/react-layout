import { useState,useEffect } from "react";
import axios from "axios"
import housePlan from "./housePlan";

const housePlans = (housePlan)=>{
    const [houses,setHouses] = useState([]);

    //ait until after page is loaded to do asyncronis json parsing
    useEffect(()=>{
        (async()=>{
            const response = await axios.get("https://portiaportia.github.io/json/house-plans.json");
            setHouses(response.data);

        })();
    })
    
    return(
        <section className="house-plan">
            <h3>house plans</h3>
            {houses.map((housePlan)=>(
                <housePlan 
                    name={housePlan.name}
                    size={housePlan.size}
                    bedrooms={housePlan.bedrooms}
                    bathrooms={housePlan.bathrooms}
                />

            ))}
        </section>
    );
}

export default housePlan;