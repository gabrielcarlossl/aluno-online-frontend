export const registerAlunoService = async (data) => {
  try {
    const response = await fetch('http://localhost:8080/aluno', {
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
