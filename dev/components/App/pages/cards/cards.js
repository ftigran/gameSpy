import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'

import './cards.scss'

const cards = () => {
    const location = true//useSelector(state=>state.location)
    //const humans = useSelector(state=>state.humans)
    const [flipped, setFlipped] = useState(false)
    //console.log(location)
    if (location) {
        return (
            <div className="page-container">

<div 
            onClick={()=>setFlipped(!flipped)} 
            className={"card-container" + (flipped ? " flipped" : "")}
>

<div className="back">
        <p>Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post.</p>
        <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
      </div>

      <div className="front">
      <div className="main-area">
        <div className="blog-post">
          <p className="date">{new Date().toLocaleDateString()}</p>
          <p className="blog-content">
            Some sample text to demonstrate how these cards will work, including how they truncate long sentences.
            </p>
          <p className="read-more">Hover to read more...</p>

        </div>

      </div>      </div>
            </div>
            </div>
        )
    }
    return "null"
    
}
export default cards