import { REGISTER_ALUNO_REQUEST, REGISTER_ALUNO_SUCCESS, REGISTER_ALUNO_FAILURE } from '../types/types';

export const registerAlunoRequest = (data) => ({
    type: REGISTER_ALUNO_REQUEST,
    payload: data
})
export const registerAlunoSuccess = () => ({
    type: REGISTER_ALUNO_SUCCESS,
    
})
export const registerAlunoFailure = (error) => ({
    type: REGISTER_ALUNO_FAILURE,
    payload: error
})