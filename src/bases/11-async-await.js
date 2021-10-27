

const apiKey = 'Y3h0vjouDCSgUbSpWHPtoDPT3R9PEjlk';



export const ImgAsync = async () => {
    try {
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const info = await peticion.json();
        const { url } = info.data.images.original;


        return url;

    } catch (error) {
        //console.err(error);
        return 'no existe';
    }


}
ImgAsync();

