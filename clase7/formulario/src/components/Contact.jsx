import React from 'react';
import '../App.css'; // Archivo CSS dedicado al formulario

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contacto</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje"></textarea>
                </div>
                <button type="submit" className="btn-submit">Enviar</button>
            </form>
            <footer className="footer">
                © 2025 Perfil de Usuario - Todos los derechos reservados
            </footer>
        </div>
    );
}

export default Contact;
