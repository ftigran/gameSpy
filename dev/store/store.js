import {createStore, bindActionCreators} from 'redux'
import {rootRedducer} from './reducers'

const user={
  firstName: 'Владимир',
  cheki: 50,
  prizi: 4,
  phone: '+7 888 555 6666',
  email: 'sqs@sa.ssa',
};

export const store = createStore(rootRedducer)
console.log(store.getState())


