import Lideshow from "../components/slideshow";
import HousePlan from "../components/housePlan";
import { useState,useEffect } from "react";


const about = ()=>{
    return (
        <>
            <h3>About</h3>
            <Lideshow />
            
            <h3>HousePlan</h3>
            <div id="house-plans">
                <HousePlan 
                    name="home"
                    size="300"
                    bedrooms="1"
                    bathrooms="0"/>
            </div>
        </>
    );
};  

export default about;