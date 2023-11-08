import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Spinner.module.scss';

interface SpinnerProps {
    className?: string;
}
export const Spinner:FC<SpinnerProps> = ({ className }) => (
    <span className={classNames(cls.Loader, {}, [className])} />
);
