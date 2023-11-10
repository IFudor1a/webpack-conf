import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={classNames(cls.links)}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.links}
                    onClick={onToggleModal}
                >
                    {t('Log in')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal} />
            </div>
        </div>
    );
};
