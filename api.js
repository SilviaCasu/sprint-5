var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

const UPLOADING_JOKES = async () => {

    try {
        var RESPUESTA = await fetch("https://icanhazdadjoke.com/", requestOptions
        );
        var DATOS = await RESPUESTA.json();

        if (DATOS.status === 200) {
            SHOW_JOKE(DATOS);
           actualJoke = DATOS.joke;
           

        } else if (DATOS.status === 401) {
            console.log('Hay algun error en la clave');
        } else if (DATOS.status === 404) {
            console.log('el dato buscado no existe');
        } else {
            console.log('ha habido un error desconocido');
        }
    }
    catch (error) {
        console.log(error)
    }
}






