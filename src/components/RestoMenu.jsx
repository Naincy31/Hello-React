import Shimmer from './Shimmer'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestoMenu from '../utils/hooks/useRestoMenu'
import RestoCategory from './RestoCategory'

const RestoMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestoMenu(resId)
    const [showIndex, setShowIndex] = useState(0)
    
    if (resInfo === null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type']?.includes("ItemCategory"))
    
    return (
        <div className="m-auto p-2 w-[800px] flex flex-col gap-2.5 mt-9">
            <h1 className="font-extrabold text-xl">{name}</h1>
            <p className="text-customOrange">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) => <RestoCategory key={category.card.card.title} data={category.card.card} showItems={index === showIndex && true} setShowIndex={(showIndex) => ( showIndex === index ? setShowIndex(-1) : setShowIndex(index))} showIndex={showIndex}/>)}
        </div>
    )
}

export default RestoMenu
