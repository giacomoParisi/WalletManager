import { dark, light, Themes } from './themes'

export default function getTheme(theme: Themes) {
    switch (theme) {
        case Themes.LIGHT:
            return light
        case Themes.DARK:
            return dark
        default:
            return light
    }
}
