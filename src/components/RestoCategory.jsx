import ItemList from "./ItemList"
import { useState } from 'react'

const RestoCategory = ({data, showItems, setShowIndex, showIndex}) => {

    const handleClick = () => {
        setShowIndex(showIndex)
    }

    return (
        <div>
            <div className="h-4 bg-gray-200"></div>
            <div className="flex justify-between mt-5 cursor-pointer mx-3" onClick={handleClick}>
                <span className="font-extrabold">{data.title}{data.itemCards && ` (${data.itemCards.length})`}</span>
                <span>{showItems ? "▼" : "▲"}</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}

export default RestoCategory