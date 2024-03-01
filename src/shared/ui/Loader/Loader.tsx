import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

export enum LoaderTheme {
    INVERTED_BACKGROUND = 'inverted_bg',
    PRIMARY = 'primary',
    BACKGROUND = 'background',
}

export enum LoaderSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface LoaderProps {
    className?: string;
    theme?: LoaderTheme;
    size?: LoaderSize;
}

export const Loader = (props: LoaderProps) => {
    const {
        className,
        theme = LoaderTheme.INVERTED_BACKGROUND,
        size = LoaderSize.M,
    } = props;

    const mods: Record<string, boolean> = {};

    return (
        <span
            className={classNames(cls.loader, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
        />
    );
};
