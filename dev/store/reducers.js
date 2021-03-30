import {SET_HUMANS, SET_GAME_PROGRESS, SET_CARD_ID, SHOW_FINAL_MODAL,SET_SPYS, SET_SPY_ARRAY, SET_LOCATION} from './actions'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';


const initialState = {
  humans:3,
  spys: 3,
  spyArray:[false, true,true,true,false],
  location:"Кафе",
  cardID:0,
  timer:1,
  showModal:false,
  gameProgress:"settings"
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
      case SHOW_FINAL_MODAL:
        return {...state, showModal: action.payload}
      case SET_GAME_PROGRESS:
        console.log(action)
        return {...state, gameProgress: action.payload}
    }
    return state
  }
  
  const reducers = {
    data: rootRedducer,
    form: formReducer,
    
  };
//export const reducer = combineReducers(reducers);


  