import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'Users',
    initialState: {
        users: [],
        authenticated: [],
        registerUsers : [],
    },

    reducers: {
        addUsers: (state, action) => {
            state.registerUsers.push({
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                username : action.payload.username,
                email : action.payload.email,
                occupation : action.payload.occupation,
                phone: action.payload.phone,
                address: action.payload.address,
                dob: action.payload.dateOfBirth,
                password : action.payload.password

            })
        },
        authenticatedUser: (state, action) => {
            state.authenticated.push(action.payload)
        },
        
        logoutUser : (state ,action) =>{
            state.authenticated.splice(0, state.authenticated.length);
        },

        fetchUsers: (state, action) => {
            state.users.push(action.payload)
        }
    }
})

export const { addUsers, authenticatedUser ,logoutUser ,fetchUsers } = usersSlice.actions;
export default usersSlice.reducer;