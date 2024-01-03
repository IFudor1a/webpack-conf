import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { LoginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername.test', () => {
    // let dispatch:Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test('success login', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = LoginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    // });
    // test('rejected login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = LoginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('authentication error!');
    // });

    test('success login', async () => {
        const userValue = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const thunk = new TestAsyncThunk(LoginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    test('rejected login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(LoginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('authentication error!');
    });
});
