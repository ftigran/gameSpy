import {SET_HUMANS, SET_CARD_ID, SET_SPYS, SET_SPY_ARRAY, SET_LOCATION} from './actions'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';


const initialState = {
  humans:3,
  spys: 1,
  spyArray:[false, true,false],
  location:"Кафе",
  cardID:0
}
  export const rootRedducer = (state=initialState, action)=>{
    switch (action.type){
      case SET_HUMANS:
        console.log(action)
        return {...state, humans: action.payload};
      case SET_SPYS:
        console.log(action)
        return {...state, spys: action.payload}
      case SET_SPY_ARRAY:
        return {...state, spyArray: action.payload}
      case SET_LOCATION:
        return {...state, location: action.payload}
      case SET_CARD_ID:
        return {...state, cardID: action.payload}
    }
      
    return state
  }

  const reducers = {
    data: rootRedducer,
    form: formReducer,
    
  };
//export const reducer = combineReducers(reducers);


  