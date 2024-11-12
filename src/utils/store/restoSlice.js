import { createSlice } from "@reduxjs/toolkit";

const restoSlice = createSlice({
    name: 'restaurants',
    initialState: {
        list: [],
        filteredList: [],
        filterActive: false
    },
    reducers: {
        setRestaurants: (state, action) => {
                state.list = action.payload;
                state.filteredList = [];
                state.filterActive = false
        },
        filteredRestaurantsByName: (state, action) => {
            state.filteredList = state.list.filter(resto => resto.info.name.toLowerCase().includes(action.payload.toLowerCase()))
            state.filterActive = true
        },
        filteredRestaurantsByRating: (state) => {
            state.filteredList = state.list.filter(resto => resto.info.avgRating > "4.3")
            state.filterActive = true
        },
        resetFilters: (state) => {
            state.filteredList = []
            state.filterActive = false
        }
    }
})

export const { setRestaurants, filteredRestaurantsByName, filteredRestaurantsByRating, resetFilters} = restoSlice.actions

export default restoSlice.reducer