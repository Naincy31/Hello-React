import { useState, useEffect } from "react";
import RestoCard, { withOfferLabel, RestoCardWrapper } from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestoList from "../utils/hooks/useRestoList";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { filteredRestaurantsByRating, resetFilters, setRestaurants } from "../utils/store/restoSlice";

const RestoList = () => {

    const dispatch = useDispatch()
    const restoList = useSelector((state) => state.restaurants.filterActive ? state.restaurants.filteredList : state.restaurants.list)
    const [btnText, setBtnText] = useState("Top Rated Restaurants")
    const onlineStatus = useOnlineStatus()

    const originalResList = useRestoList() //Calls the hook to fetch the data

    const RestoCardOffer = withOfferLabel(RestoCard)

    useEffect(() => {
        if(originalResList && originalResList.length > 0){
            dispatch(setRestaurants(originalResList))
        }
    }, [originalResList])

    const handleClick = () => {
        if (btnText === "Top Rated Restaurants") {
            dispatch(filteredRestaurantsByRating())
            setBtnText("Show All Restaurants")
        } else {
            dispatch(resetFilters())
            setBtnText("Top Rated Restaurants")
        }
    }

    if(!onlineStatus) return <h4>Looks like you're offline. Please check your internet connection</h4>

    return (restoList.length === 0) ? <Shimmer/> :
    (
        <div className="bg-gray-50">
            <div className="mt-8 ml-14">
                <button onClick = {handleClick} className="border px-5 py-1 rounded-3xl font-extrabold text-sm">{btnText}</button>
            </div>
            <div className="flex flex-wrap mb-12 p-5">
                {restoList.map(restaurant => (
                    <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                        <RestoCardWrapper>
                            {
                            restaurant.info.aggregatedDiscountInfoV3?.header ? (
                                <RestoCardOffer 
                                    resInfo = {restaurant.info}
                                /> 
                            )
                            : (
                                <RestoCard 
                                    resInfo = {restaurant.info}
                                />
                            )}
                        </RestoCardWrapper>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default RestoList;