import * as types from '../types/types'

const initialState = {
    loading: false,
    success: false,
    error: null,
    professores: []
}

const professorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_PROFESSOR_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: null
            }
        case types.REGISTER_PROFESSOR_SUCCESS:
            return{
                ...state,
                loading: false,
                success: true,
                error: null
            }
        case types.REGISTER_PROFESSOR_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
    
        default:
            return state
    }
}
export default professorReducer