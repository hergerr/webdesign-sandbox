import './theme-button.styles.css';
import { ThemeContext } from '../../theme-context';
import React from 'react';

export const ThemeButton = (props) => (
    <ThemeContext.Consumer>
        {(props) => (
            <button
                className="ThemeButton"
                onClick={props.toggleTheme}
                style={{ backgroundColor: props.theme.background }}>
                Change theme
            </button>
        )}
    </ThemeContext.Consumer>
)