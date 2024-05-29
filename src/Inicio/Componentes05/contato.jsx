import React, { useState } from 'react';
import './contato.css';
import emailjs from '@emailjs/browser';

function Contate() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function SendEmail(e) {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos');
            return;
        }
        const TemplateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send("service_r1q0i1w", "template_pn017al", TemplateParams, "TVBz5jk-QgNT88Rxi")
            .then((response) => {
                console.log('email enviado', response.status, response.text)
                setEmail('')
                setMessage('')
                setName('')

            }, (err) => {
                console.log('Erro: ', err)
            })
    }

    return (

        <section className="container">
            
            <div className='text-center py-5 text-underline'>
                    <h1><i>Entre em contato conosco</i></h1>
                </div>
            <div className='contato '>
                <div className="info-contato">
                    <div>
                        <h2 className="pt-4">Informações de Contato</h2>
                    </div>
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
                <div className="contato-email ">
                    <h1 className="title">Contato</h1>

                    <form className="form contato-form" onSubmit={SendEmail}>
                        <input
                            className="input"
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <input
                            className="input"
                            type="text"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <textarea
                            className="textarea"
                            placeholder="Digite sua mensagem..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />

                        <input className="btn button-enviar " type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
            
        </section>
    );
}

export default Contate