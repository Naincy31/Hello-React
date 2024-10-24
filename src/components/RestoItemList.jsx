import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";
import { CDN_URL } from "../utils/constants";

const RestoItemList = ({items}) => {

    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(addItem(item))
    }
    
    return (
        <div className="mx-3">
            {items?.map((item, index) => (
                <div key={item.card.info.id} className={`w-full flex justify-between items-center py-5 ${index !== items.length - 1 ? 'border-b-[1.5px]': ''}`}>
                    <div>
                        <h1 className="font-extrabold text-gray-700">{item.card.info.name}</h1>
                        <p className="font-extrabold">₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</p>
                        <div className="my-2 text-xs">
                         {item.card.info.ratings.aggregatedRating.rating && (<span className="text-green-700 font-bold">★ {item.card.info.ratings.aggregatedRating.rating}</span>)}
                         <span>{item.card.info.ratings.aggregatedRating.ratingCountV2 && " (" + item.card.info.ratings.aggregatedRating.ratingCountV2 + ")"}</span>
                        </div>
                        <p className="line-clamp-2 w-96 text-sm font-medium">{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId ? 
                        <div className="flex flex-col items-center justify-center">
                            <img src={CDN_URL + item.card.info.imageId} className="h-44 w-48 rounded-lg"/>
                            <button className="text-green-600 font-extrabold bg-white border px-10 py-1 rounded-lg shadow-md -mt-4" onClick={() => handleClick(item)}>ADD</button>
                        </div> 
                        :
                        <div className="h-44 w-48 flex items-center justify-center">
                            <button className="text-green-600 font-extrabold bg-white border px-10 py-1 rounded-lg shadow-md -mt-4" onClick={() => handleClick(item)}>ADD</button>
                        </div> 
                    }
                </div>
            ))}
        </div>
    )
}

export default RestoItemList

