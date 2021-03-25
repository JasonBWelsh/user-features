import { useState, useEffect } from 'react';
import axios from 'axios';
import { DATA_FETCH_STATUS } from '../constants';

export const useFetchData = (url) => {
    const [status, setStatus] = useState(DATA_FETCH_STATUS.IDLE);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                setStatus(DATA_FETCH_STATUS.FETCHING);
                const response = await axios.get(url);
                const { data: { results } } = response;
                console.log('response results:', results);
                setData(results);
                setStatus(DATA_FETCH_STATUS.FETCHED);
            } catch (error) {
                console.debug(error);
            }
        };

        fetchData();
    }, [url]);

    return { status, data };
};
