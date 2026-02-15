import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const recipieContext = createContext();

const Wrapper = (props) => {
    const [data, setdata] = localStorage.getItem("data") ? useState(JSON.parse(localStorage.getItem("data"))) : useState([]);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const [updateRecipeId, setUpdateRecipeId] = useState(null);
    const [updateFormData, setUpdateFormData] = useState({});

    return (
        <>
            <recipieContext.Provider value={{ data, setdata, selectedRecipeId, setSelectedRecipeId, updateRecipeId, setUpdateRecipeId, updateFormData, setUpdateFormData }}>
                {props.children}
            </recipieContext.Provider>
        </>
    )
}

export default Wrapper