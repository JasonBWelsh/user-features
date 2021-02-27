import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from './redux_slices/usersSlice';
import './App.css';

import { useFetchData } from './app/hooks/useFetchData';

import UserControls from './components/userControls';
import UsersDisplay from './components/usersDisplay';

import { URL, DATA_FETCH_STATUS } from './app/constants';

function App() {
  const [url, setUrl] = useState(URL);
  const dispatch = useDispatch();
  const { status, data } = useFetchData(url);

  useEffect(() => {
    // set user data to the redux store
    dispatch(setUsers(data));
  }, [data, dispatch]);

  
  return (
    <div className="App">
      <UserControls />
      {status === DATA_FETCH_STATUS.FETCHED && data
        ? <UsersDisplay />
        : 'fetching user data...'}
    </div>
  );
}

export default App;
