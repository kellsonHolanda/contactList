import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;


