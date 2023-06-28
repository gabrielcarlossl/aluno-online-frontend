import {call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { registerAlunoService, fetchAlunoService, deleteAlunoService } from '../service/alunoService'
import { REGISTER_ALUNO_REQUEST, FETCH_ALUNO_REQUEST, DELETE_ALUNO_REQUEST } from '../types/types'
import { registerAlunoSuccess, registerAlunoFailure, fetchAlunoSuccess, fetchAlunoFailure, deleteAlunoRequest } from '../actions/alunoActions'

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

function * deleteAlunoSaga(action) {
    try {
        yield call(deleteAlunoService, action.payload)
        yield put(registerAlunoSuccess())
    } catch (error) {
        yield put(registerAlunoFailure(error.message))
    }
}

// Exportar todas as sagas do ALUNO
export default function * alunoSaga(){
    yield takeEvery(REGISTER_ALUNO_REQUEST, registerAlunoSaga)
    yield takeEvery(FETCH_ALUNO_REQUEST, fetchAlunoSaga)
    yield takeLatest(DELETE_ALUNO_REQUEST, deleteAlunoSaga)
}