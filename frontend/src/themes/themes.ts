export const enum Themes {
    DARK,
    LIGHT,
}

export const light = {
    background: '#FFFFFF',
    primary: '#764ABC',
    onBackground: '#000000',
    onPrimary: '#FFFFFF',
    surface: '#dde6ed',
}

export const dark = {
    ...light,
    background: '#000000',
    onBackground: '#FFFFFF',
    surface: '#FFFFFF',
}

export type Theme = typeof light
