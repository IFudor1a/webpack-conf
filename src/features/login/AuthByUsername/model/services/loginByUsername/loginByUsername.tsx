import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/ui/const/LocalStorage';
// First, create the thunk
interface LoginByUsernameProps {
    username: string,
    password: string
}
enum LoginErrors {
    INCORRECT_DATA ='',
    SERVER_ERROR = ''
}

export const LoginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string}>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username, password,
            });
            if (!response.data) {
                await Promise.reject(new Error('authentication error!'));
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('authentication error!');
        }
    },
);
