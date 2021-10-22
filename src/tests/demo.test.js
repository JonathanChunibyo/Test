describe('pruebas referentes al manejo de demo.test.js', ()=>{
    test ('Prueba de funcionalidad', () =>{

        const mensaje1= 'Hola mundo';
        const mensaje2= `Hola mundo`;
        const mensaje3= "Hola mundo";
        expect(mensaje1).toBe(mensaje2);
        expect(mensaje1).toBe(mensaje3);
    });
});
