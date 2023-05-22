import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { decrement, increment, incrementByAmount } from './counterSlice'
import './counter.css'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

const [inputValue, setInputValue] = useState('');
const [error, setError] = useState(false);
const handleInput = (event) => {
    setInputValue(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();
    const amount = parseInt(inputValue);
    if (!isNaN(amount)) {
        dispatch(incrementByAmount(amount));
        setInputValue('')
    } else {
        setInputValue('')    }
};

const reset = () => {
    dispatch(incrementByAmount(-count))
    console.log('count reset')
}

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
                <form 
                className='form' 
                onSubmit={handleSubmit}
                >
                    <input 
                    className='counter-input'
                    type="number" 
                    value={inputValue} 
                    onChange={handleInput} 
                    placeholder='Enter an Integer'
                    />
                    <button className='button' type='submit'>Submit</button>
                </form>
                <button
                className='button'
                aria-label='reset'
                onClick={reset}
                >
                    reset
                </button>
            </div>
        </div>
    )
}