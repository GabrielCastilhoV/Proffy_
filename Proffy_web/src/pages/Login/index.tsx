import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './styles.css';

import studyIcon from '../../assets/images/icons/study.svg';
import logoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';

import api from '../../services/api';

function Login() {
    const history = useHistory();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    

    function logarSystem (e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            user,
            password,
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro!')
        })

        console.log({
            user,
            password,
        });
    }
    
    return (
        <div id="page-login">
            <div id="page-login-content" className="container">
                <div className="loader-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <main>
                    <form onSubmit={logarSystem}>
                        <div id="formLogin">
                            <legend>Preencha o formulário para realizar o login</legend>
                        
                            <Input 
                                name="user"
                                label="Usuário"
                                value={user}
                                onChange={(e) => { setUser(e.target.value) }} 
                            />
                            <Input 
                                name="password"
                                label="Senha"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }} 
                            />
                        </div>

                        <div className="buttons-container">
                            <Link to="/landing" className="fazer-login">
                                <img src={studyIcon} alt="Logar" />
                                Logar
                            </Link>
                            <Link to="/landing" className="sign-up">
                                <img src={studyIcon} alt="Cadastrar" />
                                Cadastrar
                            </Link>
                        </div>

                    </form>
                </main>
            </div>
        </div>
    )
}
export default Login;