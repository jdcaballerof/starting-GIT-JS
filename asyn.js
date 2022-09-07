export async function learningFetch(){ //Va a ser asincrono
    const ol = document.createElement("ol")
    console.log("") //await es como espera a que haga esto 
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await respuesta.json()
    console.log(data)  

    data.forEach(publicacion => {
        const li = document.createElement("li")
        li.innerText = publicacion.title; //en el array hay objetos que tienen la clave titulo con un texto
        ol.append(li)
    });
    document.body.append(ol)
}
