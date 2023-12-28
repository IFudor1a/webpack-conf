import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/login/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import { userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    const authData = useSelector(getUserAuthData);
    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Log out')}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={classNames(cls.links)}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Log in')}
                </Button>
                {isAuthModal ? <LoginModal isOpen={isAuthModal} onClose={onCloseModal} /> : null}
            </div>
        </div>
    );
};
