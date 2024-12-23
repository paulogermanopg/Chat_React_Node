import { createSlice } from '@reduxjs/toolkit';
import { Socket } from 'socket.io-client';

interface ChatState {
  socket: Socket | null; // O socket pode ser nulo ou um objeto Socket
}

const initialState: ChatState = {
  socket: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});

export const { setSocket } = chatSlice.actions;

export default chatSlice.reducer;