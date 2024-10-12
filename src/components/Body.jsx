import { useState } from "react";
import { resList as initialResList} from "../utils/constants";
import RestoCard from "./RestoCard";

const Body = ({cdn}) => {

    const [resList, setResList] = useState(initialResList)
    const [btnText, setBtnText] = useState("Top Rated Restaurants")

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