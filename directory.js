const names = ["Mayra", "Kira", "Navi", "Alma"];
class Person {
  constructor(personName) {
    this.personName = personName;
  }
}
function getPerson(names) {
  const newNames = [];
  for (let i = 0; i < names.length; i++) {
    newNames.push(new Person(names[i]));
  }

  return newNames;
}
getPerson(names);

//Directory
const people = ["Mayra", "Isis", "Nalle", "Fer"];

class Directory {
  constructor(person) {
    this.person = person;
  }
  [Symbol.iterator]() {
    let current = 0;
    return {
      next: () => ({
        done: current >= this.person.length,
        value: this.person[current++]
      })
    };
  }
}
const directory = new Directory(getPerson(people));
for (let show of directory) {
  console.log(show.personName);
}
