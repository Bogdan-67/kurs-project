import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div
                data-testid="loginForm"
                className={classNames(cls.loginForm, {}, [className])}
            >
                <Text title={t('Авторизация')} />
                {error && (
                    <Text
                        data-testid="loginForm-error"
                        text={error}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    data-testid="loginForm-username"
                    placeholder={t('Имя пользователя')}
                    autoFocus
                    onChange={onUserChange}
                    value={username}
                />
                <Input
                    data-testid="loginForm-password"
                    placeholder={t('Пароль')}
                    value={password}
                    onChange={onPasswordChange}
                />
                <Button
                    data-testid="loginForm-btn"
                    onClick={onLoginClick}
                    disabled={isLoading}
                    loading={isLoading}
                    theme={ButtonTheme.OUTLINE}
                    type="submit"
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
