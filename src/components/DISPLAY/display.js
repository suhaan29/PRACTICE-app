import React from "react"

import "./display.css"

const Display = (props) => {


    const clickHandler = (event) => {
        console.log(event)
        console.log(props.index)
        props.deleteItem(props.index);
    }
    return (
        <div onClick = {clickHandler} className = "box">
            {props.task}
        </div>
    )
}

export default Display;