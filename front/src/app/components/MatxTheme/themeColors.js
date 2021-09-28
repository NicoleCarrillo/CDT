const textLight = {
    primary: 'rgba(52, 49, 76, 1)',
    secondary: 'rgba(52, 49, 76, 0.54)',
    disabled: 'rgba(52, 49, 76, 0.38)',
    hint: 'rgba(52, 49, 76, 0.38)',
}
const secondaryColor = {
    light: '#f9a352',
    main: '#ff9e43',
    dark: '#ff932e',
    contrastText: textLight.primary,
}
const errorColor = {
    main: '#FF3D57',
}

export const themeColors = {
    whitePurple: {
        palette: {
            type: 'light',
            primary: {
                main: '#3D372F',
                contrastText: textLight.primary,
            },
            secondary: {
                main: '#c7c7c7',
                contrastText: '#ffffff',
            },
            error: errorColor,
            text: textLight,
        },
    },
    whiteBlue: {
        palette: {
            type: 'light',
            primary: {
                main: '#3D372F',
                contrastText: textLight.primary,
            },
            secondary: {
                main: '#c7c7c7',
                contrastText: '#ffffff',
            },
            text: textLight,
        },
    },
    slateDark1: {
        palette: {
            type: 'dark',
            primary: {
                main: '#3D372F',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#c7c7c7',
                contrastText: '#ffffff',
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    slateDark2: {
        palette: {
            type: 'dark',
            primary: {
                main: '#3D372F',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#c7c7c7',
                contrastText: '#ffffff',
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    purple1: {
        palette: {
            type: 'light',
            primary: {
                main: '#3D372F',
                contrastText: '#ffffff',
            },
            secondary: secondaryColor,
            error: errorColor,
            text: textLight,
        },
    },
    purple2: {
        palette: {
            type: 'light',
            primary: {
                main: '#3D372F',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#c7c7c7',
                contrastText: '#ffffff',
            },
            error: errorColor,
            text: textLight,
        },
    },
    purpleDark1: {
        palette: {
            type: 'dark',
            primary: {
                main: '#3D372F',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#c7c7c7',
                contrastText: '#ffffff',
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    purpleDark2: {
        palette: {
            type: 'dark',
            primary: {
                main: '#3D372F',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#c7c7c7',
                contrastText: '#ffffff',
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    blue: {
        palette: {
            type: 'light',
            primary: {
                main: '#3D372F',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#c7c7c7',
                contrastText: '#ffffff',
            },
            error: errorColor,
            text: textLight,
        },
    },
    blueDark: {
        palette: {
            type: 'dark',
            primary: {
                main: '#3D372F',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#c7c7c7',
                contrastText:'#ffffff',
            },
            error: errorColor,
            background: {
                paper: '#222A45',
                default: '#1a2038',
            },
        },
    },
    red: {
        palette: {
            type: 'dark',
            primary: {
                main: '#3D372F',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#c7c7c7',
                contrastText: '#ffffff',
            },
            error: errorColor,
        },
    },
}
