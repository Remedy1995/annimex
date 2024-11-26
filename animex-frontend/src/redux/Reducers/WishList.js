import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
    name: 'WishList',
    initialState: {
        wishlist: [],
    },

    reducers: {
        addToWishList: (state, action) => {
            state.wishlist.push({
                _id: action.payload._id,
                name: action.payload.name,
                description: action.payload.description,
                category_id: action.payload.category_id,
                category_name: action.payload.category_name,
                price: action.payload.price,
                quantity: action.payload.quantity,
                image_url: action.payload.image_url

            })
        },


        removeFromWishList: (state, action) => {
            state.wishlist = state.wishlist.filter(wishlist => {
                return (
                    wishlist._id !== action.payload._id
                )
            })
        },
    }
})

export const { addToWishList, removeFromWishList} = WishListSlice.actions;
export default WishListSlice.reducer;