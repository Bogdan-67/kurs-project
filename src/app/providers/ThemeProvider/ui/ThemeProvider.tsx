import React, { FC, useEffect, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme = Object.values(Theme).includes(
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme,
)
    ? (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme)
    : Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme = defaultTheme } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    useEffect(() => {
        if (!document.documentElement.dataset.theme) {
            document.documentElement.dataset.theme = initialTheme;
        }
    }, [initialTheme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
