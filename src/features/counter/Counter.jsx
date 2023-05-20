import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import './counter.css'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className='counter-page'>
            <div className='container'>
                <span className='count'>{count}</span>
                <button
                    className='button'
                    aria-label='Increment value'
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    className='button'
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}