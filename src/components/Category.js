import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";


const Category = () => {

const location = useLocation();
const navigate = useNavigate();
const query = new URLSearchParams(location.search);
const skip = query.get('skip') || 0;
const limit = query.get('limit') || 15;


    const handleNext = () => {
        
        query.set("skip", parseInt(skip) + parseInt(limit));
        //query.set("limit", 200);
        navigate({search: query.toString()})
    }

    return (
        <div>
            <h1>Categorys</h1>
            <h2>Skip: {skip}</h2>
            <h2>Limit : {limit}</h2>
            <button onClick={handleNext}>
                Next
            </button>
        </div>
    )
}

export default Category
