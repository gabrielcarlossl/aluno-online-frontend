import { EndpointSpringBase } from '../../utils/conts'

export const registerAlunoService = async (data) => {
  try {
    const response = await fetch(`${EndpointSpringBase}/aluno`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      return true
    } else {
      throw new Error('Erro ao cadastrar o aluno.')
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const fetchAlunoService = async () => {
  try {
    const response = await fetch(`${EndpointSpringBase}/aluno/all`)
    if(response.ok){
      const data = await response.json()
      return data
      
    } else {
      throw new Error('Erro ao buscar alunos cadastrados.')
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
