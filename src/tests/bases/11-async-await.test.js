import { ImgAsync } from "../../bases/11-async-await"


describe('pruebas await y fech', () => {
    test('debe retornar el URL de la imagen ', async() => {
        
        const url = await ImgAsync();
console.log(url);
        expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);
    })
    
})
