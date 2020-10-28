import React from 'react';
import logoImg from '../images/Logo.svg';
import '../styles/pages/login.css'

export default function Login() {
    
    return (
    <main>
        <div className="LeftSide">
            <img src={logoImg} alt="Happy"/>
        </div>
        <div className="RightSide">
            <div className="form">
                <form  className="form-login">
                    <fieldset>
                    <legend>Fazer login</legend>
                    
                <div className="input-block">
                    <label htmlFor="name">Email</label>
                    <input 
                        id="email" 
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="about">Senha</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className="remember-password">
                    <input type="checkbox" name="Remember" id="Remember"/>
                    <span>Lembrar-me</span>
                    <a href="">Esqueci minha senha</a>
                </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </main>
    );
}