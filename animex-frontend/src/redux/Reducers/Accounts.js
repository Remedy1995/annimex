import { createSlice } from "@reduxjs/toolkit";

const AccountSlice = createSlice({
    name: 'Accounts',
    initialState: {
        customerAccountBalance: [],
    },

    reducers: {
        updateAccountBalance: (state, action) => {
            state.customerAccountBalance.push({
                accountnumber : action.payload.accountnumber,
                balance : action.payload.balance
            })
        },

    }
})

export const {updateAccountBalance} = AccountSlice.actions;
export default AccountSlice.reducer;