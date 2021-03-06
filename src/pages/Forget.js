import React from 'react';
import { Link } from 'react-router-dom';

import './styles/forgetStyles.css'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'

import ImagenBackground from '../images/BackgroundILU.png'

var sectionBackground = {
    width: "100%",
    backgroundImage: "url("+ ImagenBackground + ")"
  };

class Forget extends React.Component {
    render () {
        return <React.Fragment>
            <div style={sectionBackground} className="backgroundHome">
            <div className="opacity">
                <div className="pageOlvido">
                    {/* <div className="container">
                        <NavBar />
                    </div> */}
                    <div className="container-content">
                    <h1>Olvidé mi contraseña</h1>
                    <p>Digita tu correo electrónico y te enviaremos
                    un mensaje para recuperar tu contraseña
                    </p>
                    <div className="correoBox">
                        <h2>Correo Electrónico:</h2>
                        <form>
                            <input className="spaceForm" type="email" placeholder="ejemplo@gmail.com" required/>
                            <Link to="/validacion-contraseña">
                            <button className="buttonSubmit" type="submit" >SOLICITAR CONTRASEÑA</button>
                            </Link>
                        </form>
                    </div>
                    </div>
                    <div className="container">
                        <Footer />
                    </div>
                </div>
                
            </div>
            </div>
        </React.Fragment>
    }
}

export default Forget;