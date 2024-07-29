//3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map();
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nameUsers = users.map((user) => user.name);

console.log(nameUsers);

//3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const usuarios = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nombreUsuario = usuarios.map((usuario) => {
    if(usuario.name.startsWith("A")){
        return {...usuario, name: 'Anacleto'}
    }
    return usuario
})

console.log(nombreUsuario);



//3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];


const visitas = cities.map((city) => {
     if(city.isVisited === true){
         return city.name + " -> Visitado"
     }else{
        return city.name + " -> NO visitado"
     }
 });

 console.log(visitas);