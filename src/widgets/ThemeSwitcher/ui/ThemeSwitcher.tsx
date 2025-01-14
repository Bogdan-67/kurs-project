import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode, useEffect, useState } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const [icon, setIcon] = useState<ReactNode>(<MdOutlineLightMode />);

    useEffect(() => {
        switch (theme) {
            case Theme.LIGHT:
                setIcon(<MdOutlineDarkMode size={36} />);
                break;
            case Theme.DARK:
                setIcon(<MdOutlineLightMode size={36} />);
                break;
            case Theme.BLUE:
                setIcon(<MdOutlineDarkMode size={36} />);
                break;
            default:
                setIcon(<MdOutlineLightMode size={36} />);
        }
    }, [theme]);

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {icon}
        </Button>
    );
});
