import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('Pruebas sobre 02-template-string.js ', () => {

    test('getSaludo debe retornar "Hola Manuel" ', () => {

        const name = 'Manuel Castillo';
        const msg = getSaludo(name);

        expect (msg ).toBe(`Hola ${ name }`);

    });

});


