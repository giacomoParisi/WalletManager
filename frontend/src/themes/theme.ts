export enum Color {
    VIOLET = '#9E25FC',
    DARK_VIOLET = '#250341',
    LIGHT_GRAY = '#F4F4F4',
    WHITE = '#FFFFFF',
    RED = '#d14728',
    GREEN = '#28B547',
    BLACK = '#232324',
    GRAY = '#95959c',
}

export const enum ThemeType {
    DARK,
    LIGHT,
}

export interface Palette {
    '--primary': Color
    '--onPrimary': Color
    '--background': Color
    '--onBackground': Color
    '--onBackgroundSecondary': Color
    '--positive': Color
    '--negative': Color
}

export const lightPalette: Palette = {
    '--primary': Color.VIOLET,
    '--onPrimary': Color.WHITE,
    '--background': Color.WHITE,
    '--onBackground': Color.BLACK,
    '--onBackgroundSecondary': Color.GRAY,
    '--positive': Color.GREEN,
    '--negative': Color.RED,
}

export const darkPalette: Palette = {
    ...lightPalette,
    '--background': Color.DARK_VIOLET,
    '--onBackground': Color.WHITE,
}

export interface Theme {
    type: ThemeType
    palette: Palette
}

export const light: Theme = {
    type: ThemeType.LIGHT,
    palette: lightPalette,
}

export const dark: Theme = {
    type: ThemeType.DARK,
    palette: darkPalette,
}
