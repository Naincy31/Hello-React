import { useState, useEffect } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ({cdn}) => {

    const [resList, setResList] = useState([])
    const [originalResList, setOriginalResList] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [btnText, setBtnText] = useState("Top Rated Restaurants")

    useEffect(() => {
        fecthData()
    }, [])

    const fecthData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        const restaurantsData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResList(restaurantsData)
        setOriginalResList(restaurantsData)
    }

    const handleClick = () => {
        if (btnText === "Top Rated Restaurants") {
            const filteredResList = originalResList.filter((resto) => resto.info.avgRating > "4.3")
            setResList(filteredResList)
            setBtnText("Show All Restaurants")
        } else {
            setResList(originalResList)
            setBtnText("Top Rated Restaurants")
        }
    }

    const handleSearch = () => {
        if(inputValue.trim() === ""){
            setResList(originalResList)
        } else {
            const searchedList = resList.filter((resto) => resto.info.name.toLowerCase().includes(inputValue.toLowerCase()))
            searchedList.length === 0 ? setResList(originalResList) : setResList(searchedList)
        }
    }

    return (resList.length === 0) ? <Shimmer/> :
    (
        <div className="body">
            <div className="filter-search">
                <button onClick = {handleClick} className="filter-btn">{btnText}</button>
                <div className="search">
                    <input type="search" className="search-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search restaurants..."/>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            
            <div className="resto-container">
                {resList.map(restaurant => (
                    <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                        <RestoCard 
                        resLink={restaurant.cta.link} 
                        costForTwo={restaurant.info.costForTwo} 
                        imgURL={cdn + restaurant.info.cloudinaryImageId} 
                        resName={restaurant.info.name} 
                        cuisine={restaurant.info.cuisines.join(", ")} 
                        rating={restaurant.info.avgRating}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;