/*
    ===== Código de TypeScript =====
*/
interface Direccion{
    calle:string
    pais:string
    ciudad:string
}

interface SuperHeroe{
    nombre: string
    edad:number
    direccion:Direccion
    mostarDireccion: () => void;
}

// interface SuperHeroe{
//     nombre: string
//     edad:number
//     direccion:{
//         calle:string
//         pais:string
//         ciudad:string
//     }
//     mostarDireccion: () => void;
// }


const superHeroe:SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion:{
        calle: 'Main St',
        pais:'USA',
        ciudad:'NY'
    },
    mostarDireccion(){
        return this.nombre+ ', '+ this.direccion.ciudad +', '+this.direccion.pais 
    }
}

const direccion =superHeroe.mostarDireccion();
console.log(direccion)