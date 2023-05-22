import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../query/querySlice';
// import 'getSome.css'

function GetSome() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.query.data);
  const loading = useSelector((state) => state.query.loading);
  const error = useSelector((state) => state.query.loading);

  const handleClick = () => {
    dispatch(fetchData());
    console.log(data)
  };

  if (loading) {
    return <div>Loading...</div>
  } if (error) {
    return <div>Error: {error}</div>
  } if (data) {
    return <div>{data}</div>
  }


  return (
    <div className='container'>
      <h1 className="message">No Data Available</h1>
      <button
        className='button'
        onClick={handleClick}
      >
        Get Some
      </button>
    </div>
  );
}

export default GetSome;
