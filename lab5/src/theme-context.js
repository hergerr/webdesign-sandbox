import React from 'react';

export const themes = {
    light: {
        background: '#39414d',
    },
    dark: {
        background: '#21252B',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
});