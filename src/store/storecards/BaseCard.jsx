import { useSelector, useDispatch } from 'react-redux';
import setSelection from '../query/selectionSlice'
import GetSome from '../getsomebtn/GetSome';
import './basic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

function BaseCard() {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        if (state.query.data && state.query.data.length > 0) {
            return state.query.data.products
        } else {
            const localData = localStorage.getItem('data')
            if (localData && localData.length > 0) {
                return JSON.parse(localData).products
            } else {
                return [];
            }
        }
    })

    const checkHeight = (event) => {
        const { naturalHeight, naturalWidth } = event.target;
        const tallImage = naturalHeight >= 2 * naturalWidth;
        event.target.style.objectPosition = tallImage ? 'top' : 'center';
    }

    const select = (id) => {
        let selection = data[id]
        console.log(selection)
        dispatch(setSelection(selection));
        
    }

    if (data.length === 0) {
        return (
            <div>
                <GetSome />
            </div>
        )
    } else
        return (
            <div className='card-container'>
                {data.map((item) => (

                    <div
                        className='card'
                        key={item.id}
                        onClick={() => select(item.id)}
                    >
                        <img
                            className='card-img'
                            src={item.thumbnail}
                            onLoad={checkHeight}
                            alt={`Image of ${item.title}`}
                        />
                        <p className='card-title'>{item.title}</p>
                        <p>${item.price}</p>
                        <p>
                            {item.rating}
                            <FontAwesomeIcon icon={faStar} />
                        </p>

                    </div>
                ))}

            </div>
        );
}

export default BaseCard;
