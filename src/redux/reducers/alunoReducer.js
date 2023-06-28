import * as types from '../types/types'

const initialState = {
  loading: false,
  success: false,
  error: null,
  alunos: [],
}

const alunoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_ALUNO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      }
    case types.REGISTER_ALUNO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      }
    case types.REGISTER_ALUNO_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      }
    case types.FETCH_ALUNO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      }
    case types.FETCH_ALUNO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        alunos: action.payload,
      }
    case types.FETCH_ALUNO_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      }
    case types.DELETE_ALUNO_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      }
    case types.DELETE_ALUNO_SUCCESS:
        return {
            ...state,
            loading: false,
            success: true,
            error: null,
        }
    case types.DELETE_ALUNO_FAILURE:
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
