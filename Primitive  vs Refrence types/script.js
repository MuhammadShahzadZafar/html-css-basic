const name = 'John' ;
const age = 30 ;

const person = {
  name: 'Brad' ,
  age: 20
}

let newName = name;
newName = 'Johnathan'

let newPerson = person;
newPerson.name = 'Bradley'

console.log(name ,newName)
console.log(person, newPerson)