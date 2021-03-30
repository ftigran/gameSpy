import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {setGameProgress} from '../../../../store/actions'

import './cards.scss'

const cards = () => {
    const spyArray = useSelector(state=>state.spyArray)
    const humans = useSelector(state=>state.humans)
    const location = useSelector(state=>state.location)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    //const humans = useSelector(state=>state.humans)
    const clickHandler = ()=>{
        
        setFlipped(!flipped)

        setTimeout(() => {
            if(!flipped){
            if(humans-1==count){
                dispatch(setGameProgress("timer"))

            }else{
                setCount((count)=>count+1);
            }
            }
        }, 300);
    }
    const [flipped, setFlipped] = useState(true)
        return (
            <div className="page-container">
                <div 
                    onClick={clickHandler} 
                className={"card-container" + (flipped ? " flipped" : "")}
                >
                    <div className="back">
                        🕵️‍♂️
                    </div>
                    <div className="front">
                        {spyArray[count]?<span className="spyCard">Шпион</span>:location}
                    </div>
                </div>
            </div>
        )
}
export default cards
