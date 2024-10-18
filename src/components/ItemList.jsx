import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    
    return (
        <div className="mx-3">
            {items?.map((item) => (
                <div key={item.card.info.id} className="w-full flex justify-between items-center border-b-2 py-5">
                    <div>
                        <h1 className="font-extrabold text-gray-700">{item.card.info.name}</h1>
                        <p className="font-extrabold">₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</p>
                        <div className="my-2 text-xs">
                         {item.card.info.ratings.aggregatedRating.rating && (<span className="text-green-700 font-bold">★ {item.card.info.ratings.aggregatedRating.rating}</span>)}
                         <span>{item.card.info.ratings.aggregatedRating.ratingCountV2 && " (" + item.card.info.ratings.aggregatedRating.ratingCountV2 + ")"}</span>
                        </div>
                        <p className="line-clamp-2 w-96 text-sm font-medium">{item.card.info.description}</p>
                    </div>
                    <div className="flex flex-col">
                        <img src={CDN_URL + item.card.info.imageId} className="h-52 w-52"/>
                        <button className="border-2 rounded-lg px-10 py-2 text-green-600 font-extrabold bg-white">ADD</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList

