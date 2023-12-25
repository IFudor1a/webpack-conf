import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    onChange?: (value:string) => void;
}
export const Input = memo((props: InputProps) => {
    const {
        className = '',
        value,
        placeholder,
        onChange,
        type = 'text',
        ...otherProps
    } = props;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.InputWrapper, {}, [])}>
            {placeholder ? (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            ) : null}
            <div className={cls.caretWrapper}>
                <input
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.Input}
                    {...otherProps}
                />
                <span className={cls.caret} />
            </div>
        </div>
    );
});
