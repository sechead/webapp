import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#EFEBE7',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#C2CEDC'
        },
        background: '#EFEBE7',
        neutral: {
            main: 'rgba(50, 53, 58, 0.13);',
            contrastText: '#000',
        },
        alternative: {
            main: '#E4D8E8'
        }
    },
    typography: {
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        h1: {
            fontSize: '2em',
            fontWeight: 'normal'
        },
        h2: {
            fontSize: '1.8em',
            fontWeight: 'normal'
        },
        h3: {
            fontSize: '1.6em',
            fontWeight: 'normal'
        },
        h4: {
            fontSize: '1.4em',
            fontWeight: 'normal'
        },
        h5: {
            fontSize: '1.2em',
            fontWeight: 'normal'
        },
        h6: {
            fontSize: '1em',
            fontWeight: 'normal'
        },
        body1: {
            fontSize: '1em',
            fontWeight: 'normal'
        },
        body2: {
            fontSize: '.8em',
            fontWeight: 'normal'
        }
    },
    designBasics: {
        borderRadius: '30px'
    }
});

export default theme;
