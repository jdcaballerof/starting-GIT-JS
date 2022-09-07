document.write("");

let no = 4;
let cont = 0;

console.log('inicias con x =', no);
while(no > 1){
    if (no%2 == 1){
        no = 3*no+1;
        cont ++
        console.log(cont +') 3x+1:   ',no);
    }

    else if (no%2 == 0){
        no = no/2;
        cont ++
        console.log(cont + ') /2:     ',no);
    }

    else {console.log('error');
    }
}

//      w3School getElement
function cambiaTexto(){
document.getElementById("demo").innerHTML = 'Holaaa desde JS';
}

function devolverTexto(){
document.getElementById("demo").innerHTML = 'ahoy';
}


//          Arrays
// https://www.youtube.com/watch?v=5yPf74sCu2k

const usuarios = [{
    id: 11,
    name:'dav',
    age: 16
},{
    id: 21,
    name:'dave',
    age: 22
},{
    id: 31,
    name:'dani',
    age: 35
}
]


let edades = usuarios.map(usuarios => usuarios.age)
console.log("la var 'edades' es:")
console.log(edades)

let ids = usuarios.map(usuarios => usuarios.id)
let acum = 0
let acum2 = 0

console.log('')
console.log('Con un simple for')

for(let i=0; i < edades.length; i++){
    console.log('La edad de la persona',(i+1),'con id:',(ids[i]),'es',edades[i])
    acum += edades[i]
}
console.log('la suma de las edades es: ', acum)



console.log('')
console.log('Con array.forEach')

edades.forEach(element => { 
    console.log('La edad es:',element)    
    acum2 += element
});

console.log('la suma de las edades es: ',acum2+2)
