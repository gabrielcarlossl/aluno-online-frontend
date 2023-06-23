
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import alunoSaga from '../sagas/alunoSaga'
import rootReducer from '../reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(alunoSaga)

export default store