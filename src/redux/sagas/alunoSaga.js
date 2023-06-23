import {call, put, takeEvery } from 'redux-saga/effects'
import { registerAlunoService, fetchAlunoService } from '../service/alunoService'
import { REGISTER_ALUNO_REQUEST, FETCH_ALUNO_REQUEST } from '../types/types'
import { registerAlunoSuccess, registerAlunoFailure, fetchAlunoSuccess, fetchAlunoFailure } from '../actions/alunoActions'

function * registerAlunoSaga(action) {
    try {
        yield call(registerAlunoService, action.payload)
        yield put(registerAlunoSuccess())
    } catch (error) {
        yield put(registerAlunoFailure(error.message))
    }
}

function * fetchAlunoSaga(){
    try {
        const alunos = yield call(fetchAlunoService)
        yield put(fetchAlunoSuccess(alunos))
    } catch (error) {
        yield put(fetchAlunoFailure(error.message))
    }
}

export default function * alunoSaga(){
    yield takeEvery(REGISTER_ALUNO_REQUEST, registerAlunoSaga)
    yield takeEvery(FETCH_ALUNO_REQUEST, fetchAlunoSaga)
}