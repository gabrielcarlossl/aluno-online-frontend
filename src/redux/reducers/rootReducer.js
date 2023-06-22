import { combineReducers } from 'redux';
import alunoReducer from './alunoReducer';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    aluno: alunoReducer,
    form: formReducer
})

export default rootReducer