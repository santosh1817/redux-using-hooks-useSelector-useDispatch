import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCount } from './redux/count/countActions';
import store from './redux/store';
function App(props) {
  const count = useSelector(state => state.count.counts);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(addCount(5));
  };

  return (
    <div>
      <h1>count : {count}</h1>

      <button
        onClick={() => {
          handleIncrement();
        }}
      >
        Increment Count
      </button>
    </div>
  );
}

export default App;
