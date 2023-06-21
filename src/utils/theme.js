export const COLORS = {
    primary: '#242760',
    secondary: '#544C4C',
    white: '#FFFFFF',
    black: '#000000',
    gray: 'rgba(36, 39, 96, 0.05)',
    secondaryGray: 'rgba(84, 76, 76, 0.14)',
    // primary: '#555CC4',
    primaryLight: '#829BF8',
    primaryGradientStart: '#4f44b6',
    primaryGradientEnd: '#4f44b6',
    secondaryGradientStart: '#FF1358',
    secondaryGradientEnd: '#FF1358',
    profileGradientStart: '#54CBF6',
    profileGradientEnd: '#49D2D0',
    secondary: '#FF1358',
    grey: '#acacac',
    gray: '#5f5f5f',
    darkGray: '#4d4d4d',
    lightGray: '#9b9b9b',
    white: '#ffffff',
    blue: '#5A81F7',
    bluish: '#F1F1F7',
    black: '#000000',
    green: '#6DD0A3',
    yellow: '#ffc247',
}
export const SIZES = {
    // global SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    padding3: 16,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 20,
    h3: 18,
    h4: 16,
    body1: 30,
    body2: 20,
    body3: 18,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
}
export const FONTS = {
    largeTitle: {
        fontFamily: 'black',
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
    },
    h1: { fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 20 },
    body1: { fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20 },
    primaryLight: 'Lato-Light',
    primaryRegular: 'Lato-Regular',
    primaryBold: 'Lato-Bold',
    primarySemiBold: 'Lato-SemiBold',
}




const appTheme = { COLORS, SIZES, FONTS }

export default appTheme

