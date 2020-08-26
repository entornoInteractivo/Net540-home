import React, {useRef} from 'react';

import registroImage from '../images/RegistroILU.png'
import cerrar from '../images/CERRAR.png'
import './styles/popRegistro.css'

const $overlay = document.querySelector(".overlay");
const $modal = document.getElementById("modal");
const $hideModal = document.querySelector("#hide-modal");
const $buttonRegistre = document.querySelector(".buttonRegistre");

function Registro({checked}) {
    const ref = useRef(null);


    function handleClick(){
        console.log(ref.current.onClick)
    }

        return (<div className="modal">
            <div>
                <img src={registroImage} width="300px" alt="Ilustración de registro" />
            </div>
            <div>
                <div className="titleRegistro">
                    <h2>REGISTRO</h2>
                    <div className="spaceTitleRegistro"></div>
                    <img ref={ref} onClick={handleClick} checked={checked} className="buttonCerrar" src={cerrar} width="10px" alt="boton cerrar" />
                </div>
                <div className="formRegitre">
                    <input className="spaceForm" type="text" name="Nombres" placeholder="Nombres" size="40" required/>
                    <input className="spaceForm" type="text" name="Apellidos" placeholder="Apellidos" size="40" required/>
                    <input className="spaceForm" type="text" name="Email" placeholder="Correo Electrónico" size="40" required/>
                    <input className="spaceForm" type="password" name="password" placeholder="Contraseña" required minlength="8" required />
                    <input className="spaceForm" type="date" id="start" placeholder="Fecha de nacimiento" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                    <input className="buttonRegistrar" type="submit" value="Registrar" />
                </div>
            </div>
        </div>
        )
    }


// class Registro extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {};
//         this.handleClick = this.handleClick.bind(this);
//       }

//     handleClick(event){
//         console.log(event.target.$overlay);
//     }

//     render() {
//         return <div className="modal">
//             <div>
//                 <img src={registroImage} width="300px" alt="Ilustración de registro" />
//             </div>
//             <div>
//                 <div className="titleRegistro">
//                     <h2>REGISTRO</h2>
//                     <div className="spaceTitleRegistro"></div>
//                     <img onClick={this.handleClick} className="buttonCerrar" src={cerrar} width="10px" alt="boton cerrar" />
//                 </div>
//                 <div className="formRegitre">
//                     <input className="spaceForm" type="text" name="Nombres" placeholder="Nombres" size="40" required/>
//                     <input className="spaceForm" type="text" name="Apellidos" placeholder="Apellidos" size="40" required/>
//                     <input className="spaceForm" type="text" name="Email" placeholder="Correo Electrónico" size="40" required/>
//                     <input className="spaceForm" type="password" name="password" placeholder="Contraseña" required minlength="8" required />
//                     <input className="spaceForm" type="date" id="start" placeholder="Fecha de nacimiento" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
//                     <input className="buttonRegistrar" type="submit" value="Registrar" />
//                 </div>
//             </div>
//         </div>
//     }
// }


export default Registro;
