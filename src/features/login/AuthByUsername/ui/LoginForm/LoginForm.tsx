import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { getLoginUsername } from 'features/login/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/login/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/login/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/login/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { LoginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(LoginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <form className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error && <Text theme={TextTheme.ERROR} text={error} />}
                <Input
                    type="text"
                    onChange={onChangeUsername}
                    value={username}
                    autoFocus
                    placeholder={t('Enter Username')}
                    className={cls.input}
                />
                <Input
                    type="text"
                    value={password}
                    onChange={onChangePassword}
                    placeholder={t('Enter Password')}
                    className={cls.input}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Log in')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
