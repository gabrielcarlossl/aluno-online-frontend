import * as types from '../types/types';

export const registerAlunoRequest = (data) => ({
    type: types.REGISTER_ALUNO_REQUEST,
    payload: data
})
export const registerAlunoSuccess = () => ({
    type: types.REGISTER_ALUNO_SUCCESS,
    
})
export const registerAlunoFailure = (error) => ({
    type: types.REGISTER_ALUNO_FAILURE,
    payload: error
})

export const fetchAlunoRequest = () => ({
    type: types.FETCH_ALUNO_REQUEST,
})

export const fetchAlunoSuccess = (alunos) => ({
    type: types.FETCH_ALUNO_SUCCESS,
    payload: alunos
})

export const fetchAlunoFailure = (error) => ({
    type: types.FETCH_ALUNO_FAILURE,
    payload: error
})
