import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" autoFocus placeholder={t('Enter Username')} className={cls.input} />
            <Input type="text" placeholder={t('Enter Password')} className={cls.input} />
            <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>{t('Log in')}</Button>
        </form>
    );
};
