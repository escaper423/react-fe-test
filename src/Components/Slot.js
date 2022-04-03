import React, { useEffect, useState } from 'react'
import './Slot.css'
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'

const Slot = (props) => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const slotType = props.type

    const [isAcceptable, setIsAcceptable] = useState(0);
    const [slotContent, setSlotContent] = useState("")

    useEffect(() => {
        setSlotContent(selector[slotType]);
    }, [selector])

    const placeholderText = () => {
        if (slotType === "data") {
            return "데이터 슬롯"
        }
        else if (slotType === "func") {
            return "함수 슬롯"
        }
        else {
            return "결과 슬롯"
        }
    }

    const handleDrop = (item) => {
        const oldElement = { type: slotType, description: slotContent }
        if (slotContent != ""){
            props.addHandler(oldElement)
        }
        props.delHandler(item)
        dispatch({ type: slotType, content: item.description })    
    }

    const checkType = (item) => {
        return (item.type === slotType)
    }

    const handleBorder = (item) => {
        if (item.type == slotType) {
            setIsAcceptable(1);
        }
        else if (item.type != slotType){
            setIsAcceptable(2);
        }
        
    }
    const removeData = () => {
        const oldElement = { type: slotType, description: slotContent }
        dispatch({ type: slotType, content: "" })
        props.addHandler(oldElement)
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "Block",
        canDrop: (item) => checkType(item),
        drop: (item) => handleDrop(item),
        hover: (item) => handleBorder(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))
    return (
        <div onDrop={handleDrop} className={`slot
        ${(slotContent != "") ? ' filled' : ' '} 
        ${isOver && isAcceptable === 1 && ' acceptable'} 
        ${isOver && isAcceptable === 2 && ' declined'}`} 
        ref={drop}
        >
            {
                (slotContent != "" && slotType != "result") ? <span onClick={removeData} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}><b>&#10005;</b></span> : null
            }
            {
                (slotContent == "") ?
                    placeholderText()
                    :
                    slotContent
            }
        </div>
    )
}

export default Slot