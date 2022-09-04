/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(
        public nombre:string,
        public direccion:string
    ){}
}

class Hereo extends PersonaNormal {

    constructor( 
        public alterEgo:string,
        public edad:number,
        public nombreReal:string
    ) {
        super(nombreReal,"New York, USA")
    }
    
}


const ironman = new Hereo('Ironman',33,'Tony');

console.log(ironman)