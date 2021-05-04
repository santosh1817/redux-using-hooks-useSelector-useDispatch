import {
  ADD_COUNT
 
}from './countTypes';

export const addCount = count => {
  return {
    type: ADD_COUNT,
    payload: count
  };
};

