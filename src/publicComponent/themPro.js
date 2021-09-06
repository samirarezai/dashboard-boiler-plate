import React from 'react';
import theme from "theme/theme";
import {ThemeProvider} from '@material-ui/core/styles';

const ThemPro = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {
                children
            }
        </ThemeProvider>
    );
};

export default ThemPro;
