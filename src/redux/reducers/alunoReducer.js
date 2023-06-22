import { REGISTER_ALUNO_REQUEST, REGISTER_ALUNO_SUCCESS, REGISTER_ALUNO_FAILURE } from '../types/types';

const initialState = {
    loading: false,
    success: false,
    error: null,
}

const alunoReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_ALUNO_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: null
            }
        case REGISTER_ALUNO_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: null
            }
        case REGISTER_ALUNO_FAILURE:
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

export default alunoReducer