import { CDN_URL } from "../utils/constants"

const RestoCard = ({resInfo}) => {
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo} = resInfo
   
    return (
        <div className="w-60 h-80 p-1 m-3">
            <img src={CDN_URL + cloudinaryImageId} className="w-60 h-44 rounded-2xl"/>
            <div className="my-2">
                <h4 className="truncate w-full font-[900]">{name}</h4>
                <div className="flex items-center">
                    <span className="bg-green-700 text-white font-bold rounded-full w-4 h-4 flex items-center justify-center mr-1 text-xs">
                        ★
                    </span>
                    <p className="font-[600] text-sm">{avgRating}</p>
                </div>
                <p className="truncate w-full text-gray-600 text-sm font-bold">{cuisines?.length > 0 ? cuisines.join(", ") : "N/A"}</p>
                <p className="text-gray-600 text-sm font-bold">{costForTwo}</p>
            </div>
        </div>
    )
}

//Higher Order Component

export const withOfferLabel = (RestoCard) => {
    //returns a new functional component wrapping RestoCard component
    return (props) => {
        const { resInfo: {aggregatedDiscountInfoV3 }} = props;
        //modified JSX that includes both offer label and RestoCard content
        return (
            <div className="relative">
                <div className="absolute top-36 left-4 p-2 text-white z-10">
                    <p className="font-extrabold">{aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}</p>
                </div>
                <RestoCard {...props} />
            </div>
        );
    };
};

export const RestoCardWrapper = ({ children }) => {
    return (
        <div className="w-60 h-80 p-1 m-3 hover:scale-95 cursor-pointer transform transition-all duration-200 ease-in-out">
            {children}
        </div>
    );
};

export default RestoCard;