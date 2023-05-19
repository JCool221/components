import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './querySlice';
import { Link } from 'react-router-dom';
import './query.css'

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
        return <div className='store-container'>
            <Link to="/store/raw" className='store-btn'>Raw Data</Link>
            <Link to="/store/basic" className='store-btn'>Basic Card</Link>
            </div>
    }
}

export default Query;
