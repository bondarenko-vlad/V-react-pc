import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import elements from './elem'
import filters from './filters'
import getitem from './getItem'
import search from './search'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    elements,
    filters,
    getitem,
    search,
})

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store