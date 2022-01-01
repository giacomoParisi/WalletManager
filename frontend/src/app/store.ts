import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slicer'
import transactionsReducer from '../components/transactions/transactionsSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        transactions: transactionsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
