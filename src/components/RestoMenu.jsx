import Shimmer from './Shimmer'
import { CDN_URL } from '../utils/constants'
import { useParams } from 'react-router-dom'
import useRestoMenu from '../utils/hooks/useRestoMenu'

const RestoMenu = () => {
    const {resId} = useParams()

    const resInfo = useRestoMenu(resId)
    
    if (resInfo === null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
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
                        <p className="description">{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId && 
                        <div className="item-img">
                            <img src={CDN_URL + item.card.info.imageId} alt="" />
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default RestoMenu