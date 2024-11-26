import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cart: [],
        authenticated: [],
        registerUsers: [],
    },

    reducers: {
        addItems: (state, action) => {
            state.cart.push({
                _id: action.payload._id,
                name: action.payload.name,
                description: action.payload.description,
                category_id: action.payload.category_id,
                category_name: action.payload.category_name,
                price: action.payload.price,
                quantity: 1,
                image_url: action.payload.image_url

            })
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(cart => {
                return (
                    cart._id !== action.payload._id
                )
            })
        },

        updateQuantityInCart: (state, action) => {
            state.cart = state.cart.map(cart => {
                if(cart._id === action.payload._id){
                 return {...cart,quantity : action.payload.quantity}
                }
                else {
                   return cart;
                }
               
            })
        },
        authenticatedUser: (state, action) => {
            state.authenticated.push(
                {
                    role: action.payload.role,
                    phone: action.payload.phone
                }
            )
        },

        logoutUser: (state, action) => {
            state.authenticated.splice(0, state.authenticated.length);
        },

        fetchUsers: (state, action) => {
            state.users.push(action.payload)
        }
    }
})

export const { addItems, authenticatedUser, logoutUser, fetchUsers, removeFromCart, updateQuantityInCart } = CartSlice.actions;
export default CartSlice.reducer;