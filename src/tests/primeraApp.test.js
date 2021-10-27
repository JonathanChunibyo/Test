import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';


describe('pruebas primeraApp.js ', () => {
    /*     test('debe mostrar el mensaje en el h1 ', () => {
            
            const saludo= 'Hola mucho gusto';
            const { getByText } = render(<PrimeraApp saludo= {saludo}/>);
            expect(getByText(saludo+'xd')).toBeInTheDocument();
        }); */
  /*   test('mostrar el mensaje del componente h1', () => {

        const wraper = shallow(<PrimeraApp />);
        expect(wraper).toMatchSnapshot();
    }); */

    test(' debe mostrar el subtitulo enviado por PROPS', () => {

        const titulo = 'Soy un test en el app';
        const subTitulo = 'subtitulo de Soy un test en el app';

        const wraper = shallow(<PrimeraApp saludo={titulo}
            sub={subTitulo} />);


        const elemento = wraper.find('p').text();
        console.log(elemento);
        console.log(subTitulo);
        //expect(elemento).toBe(subTitulo);

    });

});
