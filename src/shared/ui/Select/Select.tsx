import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = ({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: SelectProps) => {
    const mods: Mods = {};

    const optionsList = useMemo(() => {
        return options?.map((option) => (
            <option
                key={option.value}
                value={option.value}
                className={cls.option}
            >
                {option.label}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                value={value}
                className={cls.select}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
