import { useEffect, useState } from "react"
import usePopularCuisines from "../utils/hooks/usePopularCuisines"
import { CDN_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { filteredRestaurantsByName, resetFilters } from "../utils/store/restoSlice"

const Search = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")
    const [cuisinesList, setCuisinesList] = useState([])
    const filteredList = useSelector((state) => state.restaurants.filteredList);

    const cuisines = usePopularCuisines()

    useEffect(() => {
        if(cuisines){
            setCuisinesList(cuisines) 
        }
    }, [cuisines])

    const handleSearch = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        if(inputValue.trim() === ""){
            dispatch(resetFilters())
        } else {
            dispatch(filteredRestaurantsByName(inputValue))
        }
    }, [inputValue])

    return (
        <div className="w-[800] m-auto mt-10 pb-6 flex flex-col gap-11 h-screen">
            <div className="text-gray-600">
                <input type="search" className="w-[700] px-5 py-3 border border-solid rounded-md focus:outline-none" value={inputValue} onChange={handleSearch} placeholder="Search for restaurants and food..."/>
                <i className="fa fa-search -ml-8 text-lg"></i>
            </div>
            {filteredList.length > 0 ? 
                <div className="w-[700]"> 
                    {filteredList.map((restaurant) => (
                    <div key={restaurant.info.id} className="flex gap-2 mb-3 hover:bg-gray-100 p-2 res-info">
                        <img src={CDN_URL + restaurant.info.cloudinaryImageId} className="w-10 h-10 rounded-lg"/>
                        <h6 className="text-sm">{restaurant.info.name}</h6>
                    </div>
                ))}
                </div>
                : 
                <div className="ml-4">
                    <h1 className="font-extrabold">Popular Cuisines</h1>
                    <div className="flex mt-4">
                        {cuisinesList.map(cuisine => (
                            <img src={CDN_URL + cuisine.imageId} className="h-20 w-14"/>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Search