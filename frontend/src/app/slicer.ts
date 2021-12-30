import { createSlice } from '@reduxjs/toolkit'
import { Themes } from '../themes/themes'
import { RootState } from './store'

export const slicer = createSlice({
    name: 'app',
    initialState: {
        theme: Themes.LIGHT,
    },
    reducers: {
        darkTheme: (state) => {
            state.theme = Themes.DARK
        },
        lightTheme: (state) => {
            state.theme = Themes.LIGHT
        },
    },
})

export const { darkTheme, lightTheme } = slicer.actions

export const selectorTheme: (state: RootState) => Themes = (state: RootState) =>
    state.app.theme

export default slicer.reducer
