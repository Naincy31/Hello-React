import { useState, useEffect } from "react";
import RestoCard, { withOfferLabel, RestoCardWrapper } from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestoList from "../utils/hooks/useRestoList";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const RestoList = () => {

    const [restoList, setRestoList] = useState([])
    const [btnText, setBtnText] = useState("Top Rated Restaurants")
    const onlineStatus = useOnlineStatus()
    
    const originalResList = useRestoList()

    const RestoCardOffer = withOfferLabel(RestoCard)

    useEffect(() => {
        if(originalResList && originalResList.length > 0){
            setRestoList(originalResList)
        }
    }, [originalResList])

    const handleClick = () => {
        if (btnText === "Top Rated Restaurants") {
            const filteredResList = originalResList.filter((resto) => resto.info.avgRating > "4.3")
            setRestoList(filteredResList)
            setBtnText("Show All Restaurants")
        } else {
            setRestoList(originalResList)
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