import React, { useState } from "react";
function Course(props){
    const [purchased, setPurchased] = useState(false);
    const [discountedRate, setDiscountedRate] = useState(props.rate);

    function changes(){
        setPurchased(true);
    }
    function changes1(){
        const newRate = props.rate * 0.8;
        setDiscountedRate(newRate);

    }
    
    return(
       props.course &&
        <div className="card">
            <img src={props.image} alt="no image" />
            <h3>{props.course}</h3>
            <p>{props.description}</p>
            <h3>{discountedRate}</h3>
            <button onClick={() => changes()}>Buy Now</button><br/><br/>
            <button onClick={() => changes1()}>get offer</button><br/><br/>
            <button onClick={() => props.deleteCourse(props.id)}>Delete</button>

            <p>{purchased ? "Purchased" : "Get it now"}</p>

        </div>
        
    );
}

export default Course;