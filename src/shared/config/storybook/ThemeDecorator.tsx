import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme): Decorator => {
    return (Story) => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
        );
    };
};
