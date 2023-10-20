import { classNames } from 'shared/lib/classNames/classNames';
import React, { type FC, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}
export const Sidebar: FC<SidebarProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>TOGGLE</Button>
            <div className={classNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
