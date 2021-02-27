import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../redux_slices/usersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
