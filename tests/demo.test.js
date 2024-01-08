describe('Pruebas en <demoComponente />', () => {

    test('Esta prueba no debe fallar', () => {
        //1. Inicialicacion
        const msg1 = 'Hola Mundo';


        //2. estimulo
        const msg2 = msg1.trim()


        //3. observar el comportamiento....esperado
        expect ( msg1 ).toBe( msg2 );
        
    })

}); 
