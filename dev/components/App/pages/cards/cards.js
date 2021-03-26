import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'

import './cards.scss'

const cards = () => {
    const location = useSelector(state=>state.location)
    const spyArray = useSelector(state=>state.spyArray)
    console.log(spyArray)
    
    const [count, setCount] = useState(0)

    //const humans = useSelector(state=>state.humans)
    const clickHandler = ()=>{
        if(!flipped){
            console.log('next')
        console.log(spyArray[count])
            setCount(count+1);
        }
        setFlipped(!flipped)
    }
    const [flipped, setFlipped] = useState(true)
    //console.log(location)
    if (location) {
        return (
            <div className="page-container">

<div 
            onClick={clickHandler} 
            className={"card-container" + (flipped ? " flipped" : "")}
>

<div className="back">
            <h1>
            🕵️‍♂️
            </h1>
      </div>

      <div className="front">
            {spyArray[count]?"Шпион":location}
      </div>


            </div>
            </div>
        )
    }
    return "Nazad"
    
}
export default cards
