import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('decrement test', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement))
            .toEqual({ value: 9 });
    });
});

describe('counterSlice.test', () => {
    test('increment test', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment))
            .toEqual({ value: 11 });
    });
});

describe('counterSlice.test', () => {
    test('empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement))
            .toEqual({ value: -1 });
    });
});
