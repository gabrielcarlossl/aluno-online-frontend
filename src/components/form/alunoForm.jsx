import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AlunoForm = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrar Aluno</h2>
            <div>
                <label htmlFor="nome">Nome:</label>
                <Field name='nome' component='input' type='text'></Field>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <Field name='email' component='input' type='email'></Field>
            </div>
            <div>
                <label htmlFor="curso">Curso:</label>
                <Field name='curso' component='input' type='text'></Field>
            </div>
            <button type='submit'>Cadatrar</button>

        </form>
    )
}

export default reduxForm({form: 'alunoForm'})(AlunoForm)