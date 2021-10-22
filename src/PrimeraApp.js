import { Fragment } from "react";
import PropTypes from "prop-types";

const saludo = 'UN SALUDITO';
/* const persona = {
 nombre: 'juana',
 apellido: 'rangel',
 ciudad: 'cucuta'
} */
const primeraApp = ( {saludo, sub} ) => {

    return (
        <>
            <h1> { saludo } </h1>
            {/* <p> {JSON.stringify(persona, null, 3)} </p>
            <pre> {JSON.stringify(persona, null, 3)} </pre> */}
            <p>Estoy mirando si funciona</p>
            <p>{sub}</p>
            
        </>
    );
}

primeraApp.propTypes = {
    saludo: PropTypes.string.isRequired ,
}
primeraApp.defaultProps = {
    saludo: 'Hola mucho gusto',
    sub: 'Quizas olvidaste poner un subtitulo'
}

export default primeraApp;