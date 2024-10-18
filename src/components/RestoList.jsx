import { useState, useEffect, useContext } from "react";
import RestoCard, { withOfferLabel, RestoCardWrapper } from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestoList from "../utils/hooks/useRestoList";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/context/UserContext";

const RestoList = () => {

    const [restoList, setRestoList] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [btnText, setBtnText] = useState("Top Rated Restaurants")
    const onlineStatus = useOnlineStatus()
    
    const originalResList = useRestoList()

    const RestoCardOffer = withOfferLabel(RestoCard)

    useEffect(() => {
        if(originalResList && originalResList.length > 0){
            setRestoList(originalResList)
        }
    }, [originalResList])

    console.log("ResList rendered:", restoList);

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

    const handleSearch = () => {
        if(inputValue.trim() === ""){
            setRestoList(originalResList)
        } else {
            const searchedList = restoList.filter((resto) => resto.info.name.toLowerCase().includes(inputValue.toLowerCase()))
            searchedList.length === 0 ? setRestoList(originalResList) : setRestoList(searchedList)
        }
    }

    if(!onlineStatus) return <h4>Looks like you're offline. Please check your internet connection</h4>

    const { setUserName, loggedInUser } = useContext(UserContext)

    return (restoList.length === 0) ? <Shimmer/> :
    (
        <div>
            <div className="flex p-4 mx-7">
                <button onClick = {handleClick} className="border px-5 py-1 rounded-3xl font-extrabold text-sm">{btnText}</button>
                <div className="px-5 py-1">
                    <input type="search" className="w-80 mr-2 px-5 py-1 border border-solid rounded-md focus:outline-none" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search restaurants..."/>
                    <button className="border px-5 py-1 rounded-lg" onClick={handleSearch}>Search</button>
                </div>
                <div className="px-5 py-1">
                    <label>UserName</label>
                    <input className="w-80 mr-2 px-5 py-1 border border-solid rounded-md focus:outline-none" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            
            <div className="flex flex-wrap mt-2 mb-12 p-5">
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