// src/Counter.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';
import { RootState } from './store';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className='Counter'>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
