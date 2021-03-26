import React, { Component } from "react";
import {useSelector, useDispatch} from 'react-redux'

import './cards.scss'

const cards = () => {
    const location = useSelector(state=>state.location)
    const humans = useSelector(state=>state.humans)
    
    console.log(location)
    if (location) {
        return (
            <>  
    {location}
            </>
        )
    }
    return "null"
    
}
export default cards