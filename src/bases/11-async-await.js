/* 
const getImagePromise = () => {
    const promesa = new Promise((resolve, reject) => {
        resolve('http://aksjaks.com');
    });
    return promesa;
}  */

/* const getImage = async () => {
     return ('http://aksjaks.com');
}   

getImage().then(console.log);
 */
const getImage = async() => {
    try{
    const apiKey = 'DSJI2VPVmaTOaVHH6nPweXcCJrxbygji';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await respuesta.json();

    const {url} = data.images.original;

    const img  = document.createElement('img');
        img.src = url;

        document.body.append(img)
    }catch{
        console.error('error');
    }
}
getImage();

