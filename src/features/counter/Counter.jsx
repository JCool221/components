import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import './counter.css'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className='counter-page'>
            <div>
                <button
                    aria-label='Increment value'
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}