import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);

            if (existingItem) {
                // If item already exists, increase its quantity
                existingItem.quantity += 1;
            } else {
                // If item is new, add it with quantity 1
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);

            if (existingItem && existingItem.quantity > 1) {
                // If quantity is greater than 1, decrease it by 1
                existingItem.quantity -= 1;
            } else {
                // Otherwise, remove the item completely
                state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id);
            }
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer