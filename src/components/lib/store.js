import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterslice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterReducer,
    },
  })
}