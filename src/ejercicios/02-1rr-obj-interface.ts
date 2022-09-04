/*
    ===== Código de TypeScript =====
*/

let habilidades:string[] = ['Bash','Couner','Healing']

// habilidades.push()
interface Personaje {
    nombre:string
    hp: number
    habilidades: string[]
    puebloNatal?: String
}

const personaje: Personaje ={
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Couner','Healing']
}

personaje.puebloNatal= 'Pueblo paleta'
console.table (personaje)