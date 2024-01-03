import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/login/AuthByUsername';
import { loginActions, loginReducer } from 'features/login/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123123'),
        )).toEqual({ username: '123123' });
    });
});
