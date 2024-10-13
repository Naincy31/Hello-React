import { useState, useEffect } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";

const Body = ({cdn}) => {

    const [resList, setResList] = useState([])
    const [btnText, setBtnText] = useState("Top Rated Restaurants")

    useEffect(() => {
        fecthData()
    }, [])

    const fecthData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(resList.length === 0){
        return <Shimmer/>
    }

    const handleClick = () => {
        if (btnText === "Top Rated Restaurants") {
            const filteredResList = resList.filter((resto) => resto.info.avgRating > "4.3")
            setResList(filteredResList)
            setBtnText("Show All Restaurants")
        } else {
            setResList(initialResList)
            setBtnText("Top Rated Restaurants")
        }
    }

    return (
        <div className="body">
            <div className="filter">
                <button onClick = {handleClick} className="filter-btn">{btnText}</button>
            </div>
            <div className="resto-container">
                {resList.map(restaurant => <RestoCard key={restaurant.info.id} costForTwo={restaurant.info.costForTwo} imgURL={cdn + restaurant.info.cloudinaryImageId} resName={restaurant.info.name} cuisine={restaurant.info.cuisines.join(", ")} rating={restaurant.info.avgRating}/>)}
            </div>
        </div>
    )
}

export default Body;