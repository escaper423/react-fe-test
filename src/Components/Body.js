import React, { useState } from 'react'
import './Body.css'
import Block from './Block'
import Slot from './Slot'
const Body = () => {
    const [blockList, setBlockList] = useState(
        [
            { type: "data", description: "모두를 위한 AI" },
            { type: "data", description: "Smarter alone, Smartest together" },
            { type: "data", description: "Make AI work for the rest of us" },
            { type: "func", description: "toUpperCase" },
            { type: "func", description: "wordNum" },
            { type: "func", description: "reverse" },
        ]
    )

    const addFromList = (item) => {
        setBlockList(block => [...block, item].sort((a, b) => { 
            let cmp = ('' + a.type).localeCompare(b.type) 
            if (cmp != 0){
                return cmp
            }
            return cmp = (''+a.description).localeCompare(b.description)
        }));

    }
    const removeFromList = (item) => {
        setBlockList(prev => prev.filter((block) => block.description != item.description))
    }

    return (
        <div className="body-content">

            <div className="block-container">
                {
                    blockList.map(item => {
                        return <Block key={item.description} type={item.type} description={item.description} />
                    })
                }
            </div>
            
            <div className="slot-container">
                <Slot type="data" addHandler={addFromList} delHandler={removeFromList} />
                ----------
                <Slot type="func" addHandler={addFromList} delHandler={removeFromList} />
                ----------
                <Slot type="result" addHandler={addFromList} delHandler={removeFromList} />
            </div>
        </div>
    )
}

export default Body