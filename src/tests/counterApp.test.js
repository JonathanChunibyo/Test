import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp'

describe('prueba sobre Counter App', () => {

    let wraper = shallow(<CounterApp />);

    beforeEach(() => {
        wraper = shallow(<CounterApp />);
    });

    /*  test(' snapshot correctamente ', () => {
 
         const value = 4000;
 
         const wraper = shallow(<CounterApp value={value} />);
         expect(wraper).toMatchSnapshot();
 
     });
     test('mostrar con value por default ', () => {
 
         //TRIM => BORRAR ESPACIOS
         const elemento = wraper.find('h2').text().trim();
         console.log(elemento);
 
         expect(elemento).toBe('100');
     }) */

    test('debe incrementar + value o + 100 con el boton', () => {

        wraper.find('button').at(0).simulate('click');
        const elemento = wraper.find('h2').text().trim();
        expect(elemento).toBe('200');

    });
    test('debe decrementar - value o - 100 con el boton', () => {

        wraper.find('button').at(2).simulate('click');
        const elemento = wraper.find('h2').text().trim();
        expect(elemento).toBe('0');

    });
    test('debe poner value con el boton', () => {

        wraper.find('button').at(2).simulate('click');
        wraper.find('button').at(2).simulate('click');
        wraper.find('button').at(2).simulate('click');
        wraper.find('button').at(1).simulate('click');
        
        const elemento = wraper.find('h2').text().trim();
        console.log(elemento);
        expect(elemento).toBe('100');

    });
})
