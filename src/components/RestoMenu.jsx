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
        <div className="m-auto p-2 w-[800px] flex flex-col gap-2.5">
            <h1 className="font-extrabold text-xl">{name}</h1>
            <p className="text-customOrange">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {itemCards.map(item => (
                <div className="my-4 p-4 flex justify-between gap-5" key={item.card.info.id}>
                    <div className="flex flex-col">
                        <h4 className="font-semibold">{item.card.info.name}</h4>
                        <p className="font-medium">₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</p>
                        <div className="my-2">
                            {item.card.info.ratings.aggregatedRating.rating && (<span className="text-green-700 font-bold">★ {item.card.info.ratings.aggregatedRating.rating}</span>)}
                            <span>{item.card.info.ratings.aggregatedRating.ratingCountV2 && " (" + item.card.info.ratings.aggregatedRating.ratingCountV2 + ")"}</span>
                        </div>
                        <p>{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId && 
                        <div className="h-52 w-60">
                            <img className="h-full w-full object-center rounded-2xl" src={CDN_URL + item.card.info.imageId} alt="" />
                        </div>
                        
                    }
                </div>
            ))}
        </div>
    )
}

export default RestoMenu