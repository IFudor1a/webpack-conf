import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginByUsername } from 'features/login/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLoading: false, password: '', username: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(LoginByUsername.fulfilled, (state, action) => {
            // Add user to the state array
            state.isLoading = false;
        })
            .addCase(LoginByUsername.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
