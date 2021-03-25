import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers, setUserSearchTerm } from '../../../redux_slices/usersSlice';
import { StyledSearch } from './StyledSearch';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => setSearchTerm(event.target.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserSearchTerm(searchTerm));
    }, [searchTerm]);

    return (
        <StyledSearch>
            <input 
                type='text'
                value={searchTerm}
                onChange={handleSearch} />
        </StyledSearch>
    );
}

export default Search;