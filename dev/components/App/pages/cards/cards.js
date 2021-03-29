import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from "react-router";
import {setGameProgress} from '../../../../store/actions'

import './cards.scss'

const cards = () => {
    const location = useSelector(state=>state.location)
    const spyArray = useSelector(state=>state.spyArray)
    const humans = useSelector(state=>state.humans)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    //const humans = useSelector(state=>state.humans)
    const clickHandler = ()=>{
        
        setFlipped(!flipped)

        setTimeout(() => {
            if(!flipped){
                console.log('next')
            console.log(spyArray[count])
                setCount(count+1);
                if(humans==count){
                    dispatch(setGameProgress("timer"))
                }
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
    }else{
        return null
    }
}
export default cards
