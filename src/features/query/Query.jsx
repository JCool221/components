import RawData from '../rawdata/RawData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, queryReducer } from './querySlice';
import { Link } from 'react-router-dom';

function Query() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.query.data);
    const loading = useSelector((state) => state.query.loading);
    const error = useSelector((state) => state.query.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) {
    return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    if (data) {
        return <div>
            <Link to="/raw">Raw Data</Link>
            </div>
    }
}

export default Query;
