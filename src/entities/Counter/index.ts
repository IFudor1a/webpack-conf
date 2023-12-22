import { counterReducer } from 'entities/Counter/model/slices/counterSlice';
import { Counter } from 'entities/Counter/ui/Counter';
import type { CounterSchema } from './model/types/counterSchema';

export {
    counterReducer,
    Counter,
    CounterSchema,
};
