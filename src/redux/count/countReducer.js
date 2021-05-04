import {
  ADD_COUNT,  
} from './countTypes';


const initialState = {
  counts: 1
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT: {
      console.log('ss',state.counts)
      return {
        ...state,
        counts : state.counts+action.payload
      };
    }
    
    default:
      return state;
  }
};

export default countReducer;
