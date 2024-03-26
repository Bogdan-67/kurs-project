import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode, useRef } from 'react';
import { Loader, LoaderSize, LoaderTheme } from 'shared/ui/Loader/Loader';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>();
    const {
        className,
        children,
        theme = ButtonTheme.PRIMARY,
        square,
        size = ButtonSize.M,
        disabled = false,
        loading = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    let loaderTheme;

    if (theme === ButtonTheme.OUTLINE) {
        loaderTheme = LoaderTheme.PRIMARY;
    } else if (theme === ButtonTheme.CLEAR) {
        loaderTheme = LoaderTheme.INVERTED_BACKGROUND;
    } else {
        loaderTheme = LoaderTheme.BACKGROUND;
    }

    return (
        <button
            ref={buttonRef}
            style={{
                minWidth: (buttonRef.current?.offsetWidth || undefined) && 0,
                minHeight: (buttonRef.current?.offsetHeight || undefined) && 0,
            }}
            type="button"
            className={classNames(cls.button, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {loading ? (
                <Loader size={LoaderSize.S} theme={loaderTheme} />
            ) : (
                children
            )}
        </button>
    );
});
