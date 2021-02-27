import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from './redux_slices/usersSlice';
import axios from 'axios';
import './App.css';

function App() {
  const URL = 'https://randomuser.me/api/?results=13';

  // const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const { data: { results } } = response;
        console.log(results);
        // setUsers(results);
        dispatch(setUsers(results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      tesst
    </div>
  );
}

export default App;
