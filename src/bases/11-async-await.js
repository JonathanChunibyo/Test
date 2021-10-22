

const apiKey = 'Y3h0vjouDCSgUbSpWHPtoDPT3R9PEjlk';



const ImgAsync = async () => {
    try {
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const info = await peticion.json();
        const { url } = info.data.images.original;

        const img = document.createElement('img');

        img.src = url;
        document.body.append(img);

        console.log(info);
        console.log(url);
    } catch (error) {
        console.err(error);

    }


}
ImgAsync();

