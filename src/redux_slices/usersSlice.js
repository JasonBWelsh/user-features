import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
    },
    reducers: {
        setUsers: (state, action) => {
            state.usersList = action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;

// selectors
export const selectUsersList = state => state.users.usersList;

export default usersSlice.reducer;