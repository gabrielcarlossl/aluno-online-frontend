import React, { useEffect, useState } from 'react'
import './aluno.css'
import { registerAlunoRequest, fetchAlunoRequest } from '../../redux/actions/alunoActions';
import { connect } from 'react-redux';
import AlunoForm from '../../components/form/alunoForm';
import AlunoTable from '../../components/table/alunosTable';

const Alunos = (props) => {
    
    const { fetchAlunoRequest,registerAlunoRequest, loading, success, error, alunos} = props

    useEffect(()=> {
        fetchAlunoRequest()
    }, [fetchAlunoRequest])

    const handleSubmit = (values) => {
        registerAlunoRequest(values)
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <div className='alunoContainer'>
            <h1>Alunos cadastrados</h1>
            <AlunoTable alunos={alunos}></AlunoTable>
                <div style={{display: 'flex'}}>
                    
                    <div>
                        <h1>Cadastrar Aluno:</h1>
                        {loading && <p>Carregando...</p>}
                        {success && <p>Aluno cadastrado com sucesso!</p>}
                        {error && <p>Erro ao cadastrar o aluno. Erro: {error}</p>}
                        <AlunoForm onSubmit={handleSubmit}></AlunoForm>
                    </div>
                </div>
            </div>
        
    )
}

const mapStateToProps = (state) => ({
    loading: state.aluno.loading,
    success: state.aluno.success,
    error: state.aluno.error,
    alunos: state.aluno.alunos
})

const mapDispatchToProps ={
    registerAlunoRequest,
    fetchAlunoRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Alunos)
