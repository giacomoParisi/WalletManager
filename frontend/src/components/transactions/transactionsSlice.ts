import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchTransactions } from './fetchTransactions'
import { TransactionState } from './types'

export const transactionsSlice = createSlice({
    name: 'links',
    initialState: {
        loading: false,
        error: '',
        data: [],
    } as TransactionState,
    reducers: {},
    extraReducers: (builder) => {
        // When we send a request,
        // `fetchTodos.pending` is being fired:
        builder.addCase(fetchTransactions.pending, (state) => {
            // At that moment,
            // we change status to `loading`
            // and clear all the previous errors:
            state.loading = true
            state.error = null
        })

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchTransactions.fulfilled, (state, { payload }) => {
            // We add all the new todos into the state
            // and change `status` back to `idle`:
            state.data.push(...payload)
            state.loading = false
        })

        // When a server responses with an error:
        builder.addCase(fetchTransactions.rejected, (state, action) => {
            // We show the error message
            // and change `status` back to `idle` again.
            state.error = action.error.message ? action.error.message : null
            state.loading = false
        })
    },
})

export default transactionsSlice.reducer
