import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    onChange?: (value:string) => void;
    autoFocus?: boolean
}
export const Input = memo((props: InputProps) => {
    const {
        className = '',
        value,
        placeholder,
        onChange,
        type = 'text',
        autoFocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const onBlur = () => {
        setIsFocus(false);
    };
    const onFocus = () => {
        setIsFocus(true);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            ref.current.focus();
        }
    }, [autoFocus]);
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder ? (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            ) : null}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.Input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                { isFocus ? (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                ) : null}
            </div>
        </div>
    );
});
