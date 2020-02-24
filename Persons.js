const names = ["Mayra", "Kira", "Navi", "Alma"];
class Person{
  constructor(personName) {
    this.personName = personName;
  }
 }
function getPerson(names) {
  const newNames = []
  for (let i = 0; i < names.length; i++) {
    newNames.push(new Person(names[i]));
  }  
  console.log(newNames);

}
getPerson(names);
