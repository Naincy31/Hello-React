const RestoCard = ({resName, cuisine, rating, imgURL, costForTwo}) => {
    return (
        <div className="resto-card">
            <img src={imgURL} className="res-img"/>
            <div className="resto-content">
                <h4>{resName}</h4>
                <p>{cuisine}</p>
                <p>{rating} stars</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}

export default RestoCard;