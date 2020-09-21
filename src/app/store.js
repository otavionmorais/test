import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { tiubsSlice } from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    tiubs: tiubsSlice.reducer
  },
});
