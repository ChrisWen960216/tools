import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  console.log(state);
  return (
    <React.Fragment>
      Count:
      {' '}
      {state.count}
      <button onClick={() => dispatch({ type: 'increment' })} type="button">+</button>
      <button onClick={() => dispatch({ type: 'decrement' })} type="button">-</button>
    </React.Fragment>
  );
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default Counter;
