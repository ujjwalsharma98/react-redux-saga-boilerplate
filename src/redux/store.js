import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import RootReducer from '../redux/reducers/index'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;