import { createStore } from 'redux'
import { reducer } from '../reducers'

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()));
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
console.log(store)

export default store