//2.1 Dado el siguiente array, crea una copia usando spread operators.
const lista = [32, 54, 21, 64, 75, 43];
const copiaLista = [...lista];

console.log(copiaLista);

//2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const juguete = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copiaJuguete = {...juguete};

console.log(copiaJuguete);


//2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const juntaArray = [...pointsList, ...pointsLis2];

console.log(juntaArray);


//2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const juntaToy = {...toy, ...toyUpdate};

console.log(juntaToy);


//2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const elimina1 = [...colors.slice(0, 1), ...colors.slice(2)];
  
console.log(elimina1);