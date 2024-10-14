import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { CDN_URL } from '../utils/constants'
import { useParams } from 'react-router-dom'

const RestoMenu = () => {

    const [restoData, setRestoData] = useState(null)

    const {resId} = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}`)
        const json = await response.json()
        console.log(json);
        setRestoData(json.data)
    }

    if (restoData === null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = restoData?.cards[2]?.card?.card?.info
    const {itemCards} = restoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {itemCards.map(item => (
                <div className="resto-item" key={item.card.info.id}>
                    <div className="item-info">
                        <h4 className="item-name">{item.card.info.name}</h4>
                        <p className="price">₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</p>
                        <div className="ratings">
                            {item.card.info.ratings.aggregatedRating.rating && (<span className="rating">★ {item.card.info.ratings.aggregatedRating.rating}</span>)}
                            <span className="rating-no">{item.card.info.ratings.aggregatedRating.ratingCountV2 && " (" + item.card.info.ratings.aggregatedRating.ratingCountV2 + ")"}</span>
                        </div>
                        <p className="description">{item.card.info.description.split("|")[1]}</p>
                    </div>
                    <div className="item-img">
                        <img src={CDN_URL + item.card.info.imageId} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RestoMenu