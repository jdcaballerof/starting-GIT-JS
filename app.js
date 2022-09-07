import { learningFetch } from "./asyn.js";



learningFetch()


console.log("Hola");
console.log("Primer cambio");

const names = ["dave","cam","jon","jess","jon"]; //Ctrl Shift L Reemplazar una palabra

names.forEach((i) => console.log(i) );


let newnames = names.map( function(i){ 
    return `Hola ${i}` //Es con comilla de Ctrl Alt llave de cierre
})
console.log(newnames)
newnames.forEach(i=> console.log(i) )


const buscaNombres = names.find(function(nombreRequerido){ //Probar find y filter
    if (nombreRequerido !== "jon"){
        return 1    //No importa que ponga siempre retorna el nombre, una vez que retorna algo terminan las interaciones
    } 
})


console.log("buscaNombresssss")
console.log(buscaNombres)

const names2 = ["dave2","cam2","jon2","jess2","jon2"];
let concatenacion = names2.concat(names);
console.log(concatenacion)
console.log([...names, ...names2])

console.log("es un array?  (buscaNombres)")
console.log(Array.isArray(buscaNombres))


const user = {
    name: "dave",
    age: 22
}

const addres = {
    state: "dave",
    city: 159,
    liveHere: true
}


console.log("info de usuario (union de objetos con Spread operator)")
const userInfo = {...user,...addres}
console.log(userInfo)

document.body.innerHTML +=`
<h2>Titulos de post</h2> 
<p>Obtenidos de JSONPlaceholder/Resources (https://jsonplaceholder.typicode.com/)</p>
`
