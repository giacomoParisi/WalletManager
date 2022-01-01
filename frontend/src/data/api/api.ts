import { createAsyncThunk } from '@reduxjs/toolkit'
import { WalletManagerError } from '../../entities/WalletManagerError'

const BASE_URL = 'http://localhost:8000'

export function api<T, A>(name: string, endpoint: string) {
    return createAsyncThunk<T, A, { rejectValue: WalletManagerError }>(
        name,
        async (arg, thunkApi) => {
            // Fetch the backend endpoint:
            const response = await fetch(`${BASE_URL}/${endpoint}`)

            // Get the JSON from the response:
            const data: T = await response.json()

            // Check if status is not okay:
            if (response.status !== 200) {
                // Return the error message:
                return thunkApi.rejectWithValue({
                    message: 'Failed to fetch todos.',
                })
            }

            // Return result:
            return data
        }
    )
}
