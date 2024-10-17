const RestoCard = ({resName, cuisine, rating, imgURL, costForTwo, resLink}) => {
    
    return (
        <div className="w-60 h-80 p-1 m-3 hover:scale-95 cursor-pointer transform transition-all duration-200 ease-in-out">
            <img src={imgURL} className="w-60 h-44 rounded-2xl"/>
            <div className="my-2">
                <h4 className="truncate w-full font-[900]">{resName}</h4>
                <div className="flex items-center">
                    <span className="bg-green-700 text-white font-bold rounded-full w-4 h-4 flex items-center justify-center mr-1 text-xs">
                        ★
                    </span>
                    <p className="font-[600] text-sm">{rating}</p>
                </div>
                <p className="truncate w-full text-gray-600 text-sm font-bold">{cuisine}</p>
                <p className="text-gray-600 text-sm font-bold">{costForTwo}</p>
            </div>
        </div>
    )
}

export default RestoCard;