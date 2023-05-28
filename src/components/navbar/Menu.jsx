import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import logo from '../../assets/graduated.png'

const Menu = () => {
    return (
        <nav >
            <hr />
            <div className='menu-container'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img className='logo' src={logo} width={50} alt="student" />
                    <span className='alunoOnline'>Aluno Online</span>
                </div>
                <div className='links'>
                    <Link className='link' to='/'>Inicial</Link>
                    <Link className='link' to='/Alunos'>Alunos</Link>
                    <Link className='link' to='/professores'>Professores</Link>
                    <Link className='link' to='/disciplinas'>Disciplinas</Link>
                </div>
            </div>
            <hr />
        </nav>
    )
}

export default Menu
