import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}
export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;
    return (
        <hgroup className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            <h5 className={cls.title}>{title}</h5>
            <p className={cls.text}>{text}</p>
        </hgroup>
    );
};
