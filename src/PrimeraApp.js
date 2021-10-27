import { Fragment } from "react";
import PropTypes from "prop-types";

/* const persona = {
 nombre: 'juana',
 apellido: 'rangel',
 ciudad: 'cucuta'
} */
const PrimeraApp = ( {saludo, sub} ) => {

    return (
        <>
            <h1> { saludo} </h1>
            {/* <p> {JSON.stringify(persona, null, 3)} </p>
            <pre> {JSON.stringify(persona, null, 3)} </pre> */}
          

            <p>{sub}</p>
            
            
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired ,
}
PrimeraApp.defaultProps = {
    saludo: 'Hola mucho gusto',
    sub: 'Quizas olvidaste poner un subtitulo'
}

export default PrimeraApp;