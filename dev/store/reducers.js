import {SET_HUMANS,SET_THEME, SET_TIMER, SET_GAME_PROGRESS, SET_CARD_ID, SHOW_FINAL_MODAL,SET_SPYS, SET_SPY_ARRAY, SET_LOCATION} from './actions'
import { combineReducers } from 'redux';
// Or with Immutablejs:


const initialState = {
  humans:3,
  spys: 1,
  spyArray:[true, false,true],
  location:"Кафе",
  timer:5,
  showModal:false,
  gameProgress:"settings",
  isDarkTheme:true,
}
  export const rootRedducer = (state=initialState, action)=>{
    switch (action.type){
      case SET_HUMANS:
        return {...state, humans: action.payload};
      case SET_SPYS:
        return {...state, spys: action.payload}
      case SET_SPY_ARRAY:
        return {...state, spyArray: action.payload}
      case SET_TIMER:
        return {...state, timer: action.payload}
      case SET_LOCATION:
        return {...state, location: action.payload}
      case SHOW_FINAL_MODAL:
        return {...state, showModal: action.payload}
      case SET_GAME_PROGRESS:
        return {...state, gameProgress: action.payload}
      case SET_THEME:
        console.log(action)
        return {...state, isDarkTheme: action.payload}
    }
    return state
  }
  
  // const reducers = {
  //   data: rootRedducer,
  //   form: formReducer,
    
  // };
//export const reducer = combineReducers(reducers);


  