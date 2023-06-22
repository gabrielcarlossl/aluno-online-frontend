import {call, put, takeEvery } from 'redux-saga/effects'
import { registerAlunoService } from '../service/alunoService'
import { REGISTER_ALUNO_REQUEST } from '../types/types'
import { registerAlunoSuccess, registerAlunoFailure } from '../actions/alunoActions'

function * registerAlunoSaga(action) {
    try {
        yield call(registerAlunoService, action.payload)
        yield put(registerAlunoSuccess())
    } catch (error) {
        yield put(registerAlunoFailure(error.message))
    }
}

export default function * alunoSaga(){
    yield takeEvery(REGISTER_ALUNO_REQUEST, registerAlunoSaga)
}