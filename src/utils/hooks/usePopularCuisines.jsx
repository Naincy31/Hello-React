import { useState, useEffect } from 'react'

const usePopularCuisines = () => {
    const [cuisines, setCuisines] = useState([])

    useEffect(() => {
        fecthData();
    }, [])

    const fecthData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=19.0759837&lng=72.8776559")
        const json = await data.json()
        const cuisinesData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
        setCuisines(cuisinesData)
    }

    return cuisines;
}

export default usePopularCuisines; 