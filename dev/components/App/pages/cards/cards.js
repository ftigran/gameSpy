import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from "react-router";

import './cards.scss'

const cards = () => {
    const location = useSelector(state=>state.location)
    const spyArray = useSelector(state=>state.spyArray)
    const humans = useSelector(state=>state.humans)
    console.log(spyArray)
    
    const [count, setCount] = useState(0)

    //const humans = useSelector(state=>state.humans)
    const clickHandler = ()=>{
        
        setFlipped(!flipped)

        setTimeout(() => {
            if(!flipped){
                console.log('next')
            console.log(spyArray[count])
                setCount(count+1);
            }
        }, 300);
    }
    const [flipped, setFlipped] = useState(true)
    //console.log(location)
    if (location&&humans>count) {
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
    const history = useHistory();
    history.push("./timer");
}
export default cards
