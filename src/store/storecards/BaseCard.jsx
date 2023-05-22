import { useSelector } from 'react-redux';
import GetSome from '../getsomebtn/GetSome';
import './basic.css'


function BaseCard() {
    const data = useSelector((state) => {
        if (state.query.data && state.query.data.length > 0) {
            return state.query.data.products
        } else {
            const localData = localStorage.getItem('data')
            if (localData && localData.length> 0){
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
