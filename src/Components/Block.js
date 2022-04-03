import React from 'react'
import './Block.css'
import {useDrag} from 'react-dnd'
const Block = (props) => {
    const dataType = props.type;
    const description = props.description;

    const [{isDragging} , drag] = useDrag(() => ({
        type: "Block",
        item: {type: dataType, description: description},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    return (
        <div ref={drag}
        className={`block ${dataType}`} 
        style={{opacity: isDragging? 0.5:1, cursor:'grab'}}>
            {description}
        </div>
    )
}

export default Block