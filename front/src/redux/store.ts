import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './slices/chatSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;