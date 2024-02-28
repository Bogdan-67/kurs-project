import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onUserChange = useCallback(
        (val: string) => {
            dispatch(loginActions.setUsername(val));
        },
        [dispatch],
    );

    const onPasswordChange = useCallback(
        (val: string) => {
            dispatch(loginActions.setPassword(val));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Авторизация')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                placeholder={t('Имя пользователя')}
                autoFocus
                onChange={onUserChange}
                value={username}
            />
            <Input
                placeholder={t('Пароль')}
                value={password}
                onChange={onPasswordChange}
            />
            <Button
                onClick={onLoginClick}
                disabled={isLoading}
                loading={isLoading}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
