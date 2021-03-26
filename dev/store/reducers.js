import {q} from './actions'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Or with Immutablejs:
// import { reducer as formReducer } from 'redux-form/immutable';


const initialState = {
  // error: false,
  // popupOpen: false,
}
  export const rootRedducer = (state=initialState, action)=>{
      switch (action.type){
                    case q:
                      return {...state, ApplyModalOpen: action.payload}
      }
      
    return state
  }

  const reducers = {
    data: rootRedducer,
    form: formReducer,
    
  };
export const reducer = combineReducers(reducers);


  