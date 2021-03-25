import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
        userSearchTerm: '',
    },
    reducers: {
        setUsers: (state, action) => {
            state.usersList = action.payload;
        },
        setUserSearchTerm: (state, action) => {
            state.userSearchTerm = action.payload;
        },
    },
});

export const { setUsers, setUserSearchTerm } = usersSlice.actions;

// selectors
export const selectUsersList = state => state.users.usersList;
export const selectUserSearchTerm = state => state.users.userSearchTerm;

export default usersSlice.reducer;