import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import Users from "./Reducers/Users";
import Deposit from "./Reducers/Deposit";
import Accounts from "./Reducers/Accounts";
import State from "./Reducers/State";
import Transactions from "./Reducers/Transactions";
import Cart from './Reducers/Cart';
import WishList from './Reducers/WishList';
const preloadState = localStorage.getItem('reduxState') ? JSON.parse( localStorage.getItem('reduxState')): {};
const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    }),
    reducer: {
        Allusers: Users,
        AllDeposits: Deposit,
        AllAccounts: Accounts,
        ManageState: State,
        Transactions: Transactions,
        Cart : Cart,
        WishList : WishList
    },
    preloadState
})


store.subscribe(()=> {
    localStorage.setItem('reduxState',JSON.stringify(store.getState()))
})

export default store;
