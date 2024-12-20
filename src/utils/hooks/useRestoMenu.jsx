import { useState, useEffect } from 'react'
import { MENU_API } from '../constants'

const useRestoMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch(MENU_API + resId)
            const json = await response.json()
            setResInfo(json.data)            
        }
                
        fetchMenu()
    }, [resId])
    
    

    return resInfo
}

export default useRestoMenu;