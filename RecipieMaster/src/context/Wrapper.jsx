import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { set } from 'react-hook-form';

export const recipieContext = createContext();

const Wrapper = (props) => {
    const [data, setdata] = useState([]);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const [updateRecipeId, setUpdateRecipeId] = useState(null);
    const [updateFormData, setUpdateFormData] = useState({});
    const [isFavourite, setisFavourite] = useState([]);

    useEffect(() => {
        setdata(JSON.parse(localStorage.getItem("data")) || []);
        setisFavourite(JSON.parse(localStorage.getItem("favourite")) || []);
    }, []);

    return (
        <>
            <recipieContext.Provider value={{ data, setdata, selectedRecipeId, setSelectedRecipeId, updateRecipeId, setUpdateRecipeId, updateFormData, setUpdateFormData, isFavourite, setisFavourite}}>
                {props.children}
            </recipieContext.Provider>
        </>
    )
}

export default Wrapper