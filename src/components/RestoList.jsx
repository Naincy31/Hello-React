import { useState, useEffect } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestoList from "../utils/hooks/useRestoList";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const RestoList = ({cdn}) => {

    const [resList, setResList] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [btnText, setBtnText] = useState("Top Rated Restaurants")
    const onlineStatus = useOnlineStatus()
    
    const originalResList = useRestoList()

    useEffect(() => {
        if(originalResList && originalResList.length > 0){
            setResList(originalResList)
        }
    }, [originalResList])

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

    if(!onlineStatus) return <h4>Looks like you're offline. Please check your internet connection</h4>

    return (resList.length === 0) ? <Shimmer/> :
    (
        <div>
            <div className="flex p-4 mx-7">
                <button onClick = {handleClick} className="border px-5 py-1 rounded-3xl font-extrabold text-sm">{btnText}</button>
                <div className="px-5 py-1">
                    <input type="search" className="w-80 mr-2 px-5 py-1 border border-solid rounded-md focus:outline-none" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search restaurants..."/>
                    <button className="border px-5 py-1 rounded-lg" onClick={handleSearch}>Search</button>
                </div>
            </div>
            
            <div className="flex flex-wrap mt-2 mb-12 p-5">
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

export default RestoList;