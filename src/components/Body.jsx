import RestoCard from "./RestoCard";

const Body = ({cdn, resList}) => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="resto-container">
                {resList.map(restaurant => <RestoCard key={restaurant.info.id} costForTwo={restaurant.info.costForTwo} imgURL={cdn + restaurant.info.cloudinaryImageId} resName={restaurant.info.name} cuisine={restaurant.info.cuisines.join(", ")} rating={restaurant.info.avgRating}/>)}
            </div>
        </div>
    )
}

export default Body;