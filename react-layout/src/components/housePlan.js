const housePlan = (housePlan)=>{
    return(
        <section className="house">
            <h3>{housePlan.name}</h3>
            <p>size: {housePlan.size}</p>
            <p>Bedrooms: {housePlan.bedrooms}</p>
            <p>Bathrooms: {housePlan.bathrooms}</p>
            <p><img src={"http://localhost:3001/images/"+housePlan.main_image} /></p>
        </section>
    );
}

export default housePlan;