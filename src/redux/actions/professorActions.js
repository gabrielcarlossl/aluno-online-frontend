import * as types from '../types/types'

export const registerProfessorRequest = (data) => ({
    type: types.REGISTER_PROFESSOR_REQUEST,
    payload: data
})
export const registerProfessorSuccess = () => ({
    type: types.REGISTER_PROFESSOR_SUCCESS
})
export const registerProfessorFailure = (error) => ({
    type: types.REGISTER_PROFESSOR_FAILURE,
    payload: error
})