/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-desetructuracion-funcion";


const carritoCompras: Producto[] =[{
    desc: 'Telefono 1',
    precio: 100
},{
    desc: 'Telefono 2',
    precio: 100
}
];

const [total,isv]=calculaISV(carritoCompras)

console.log('Total', total)
console.log('ISV', isv)

