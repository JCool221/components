import { useSelector } from 'react-redux';
import './basic.css'


function BaseCard() {
    const data = useSelector((state) => state.query.data.products)
    const checkHeight = (event) => {
        const { naturalHeight, naturalWidth } = event.target;
        const tallImage = naturalHeight >= 2 * naturalWidth;
        event.target.style.objectPosition = tallImage ? 'top' : 'center';
    }
    return (
        <div className='card-container'>
            {data.map((item) => (

                <div
                    className='card'
                    key={item.id}
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
                        {item.rating} stars
                    </p>

                </div>
            ))}

        </div>
    );
}

export default BaseCard;
