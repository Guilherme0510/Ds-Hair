import React, { useState } from 'react';
import './contato.css';
import emailjs from '@emailjs/browser';

function Contate() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos');
            return;
        }
        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        const TemplateParams = {
            from_name: name,
            message: message,
            email: email
        };

        emailjs.send("service_r1q0i1w", "template_pn017al", TemplateParams, "TVBz5jk-QgNT88Rxi")
            .then((response) => {
                console.log('Email enviado', response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
                setIsSent(true);
                setError('');
            }, (err) => {
                console.log('Erro: ', err);
                setError('Ocorreu um erro ao enviar o email. Tente novamente.');
                setIsSent(false);
            });
    }

    return (
        <section className="container">
            <div className='text-center py-5 text-underline'>
                <h1><i>Entre em contato conosco</i></h1>
            </div>
            <div className='contato row'>
                <div className="info-contato col-md-6 col-12">
                    <h2 className="pt-4 text-center">Informações de Contato</h2>
                    <div className="text-info-contato">
                        <div className="text-contato">
                            <h5>Nome</h5>
                            <p>Daniela da Silva</p>
                        </div>
                        <div className="text-contato">
                            <h5>Localização</h5>
                            <p>São Paulo - SP</p>
                        </div>
                        <div className="text-contato">
                            <h5>Telefone</h5>
                            <p>(11) 94366-2796</p>
                        </div>
                        <div className="text-contato">
                            <h5>E-mail</h5>
                            <p>daniefilhostres@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contato-email col-md-6 col-12" data-aos='fade-right' data-aos-duration='500'>
                    <h1 className="title">Contato</h1>
                    {isSent && <p className="success-message">Mensagem enviada com sucesso!</p>}
                    {error && <p className="error-message">{error}</p>}
                    <form className="form contato-form" onSubmit={handleSubmit}>
                        <input
                            className="input"
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            aria-label="Nome"
                            required
                        />
                        <input
                            className="input"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            aria-label="Email"
                            required
                        />
                        <textarea
                            className="textarea"
                            placeholder="Digite sua mensagem..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            aria-label="Mensagem"
                            required
                        />
                        <input className="btn button-enviar" type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contate;
