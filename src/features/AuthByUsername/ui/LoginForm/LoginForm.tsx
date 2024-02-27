import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const [userValue, setUserValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const onUserChange = (val: string) => {
        setUserValue(val);
    };

    const onPasswordChange = (val: string) => {
        setPasswordValue(val);
    };

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                placeholder={t('Имя пользователя')}
                autoFocus
                onChange={onUserChange}
                value={userValue}
            />
            <Input
                placeholder={t('Пароль')}
                value={passwordValue}
                onChange={onPasswordChange}
            />
            <Button theme={ButtonTheme.PRIMARY}>{t('Войти')}</Button>
        </div>
    );
};
