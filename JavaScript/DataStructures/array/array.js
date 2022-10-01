
/*
Array 
Organiza los elementos uno detrás de otro 
Usa indices

Lookup	O(1)
Push 	O(1)
Insert	O(n)
Delete	O(n)

Buscaar se realiza por indices y no modifica el arreglo
*/

const strings = ['a', 'b', 'c', 'd'];

strings.push(); // O(1)
strings.pop(); // O(1)

//Agregar al comienzo, modifica el arreglo
strings.unshift('x'); // O(n)

//eliminar x posicion , modifica el arreglo
strings.splice(2, 1, 'x')


console.log(strings)