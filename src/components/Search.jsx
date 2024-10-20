import { useEffect, useState } from "react"
import usePopularCuisines from "../utils/hooks/usePopularCuisines"
import { CDN_URL } from "../utils/constants"

const Search = () => {

    const [inputValue, setInputValue] = useState("")
    const [cuisinesList, setCuisinesList] = useState([])

    const cuisines = usePopularCuisines()

    useEffect(() => {
        if(cuisines){
            setCuisinesList(cuisines) 
        }
    }, [cuisines])

    return (
        <div className="w-[800] m-auto mt-10 pb-6 flex flex-col gap-11">
            <div className="text-gray-600">
                <input type="search" className="w-[700] px-5 py-3 border border-solid rounded-md focus:outline-none" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search for restaurants and food..."/>
                <i className="fa fa-search -ml-8 text-lg"></i>
            </div>
            <div className="ml-4">
                <h1 className="font-extrabold">Popular Cuisines</h1>
                <div className="flex mt-4">
                    {cuisinesList.map(cuisine => (
                        <img src={CDN_URL + cuisine.imageId} className="h-14 w-11"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search