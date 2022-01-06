import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { dark, light, Theme } from '../themes/theme'

export const slicer = createSlice({
    name: 'app',
    initialState: {
        theme: light,
    },
    reducers: {
        darkTheme: (state) => {
            state.theme = dark
        },
        lightTheme: (state) => {
            state.theme = light
        },
    },
})

export const { darkTheme, lightTheme } = slicer.actions

export const selectorTheme: (state: RootState) => Theme = (state: RootState) =>
    state.app.theme

export default slicer.reducer
