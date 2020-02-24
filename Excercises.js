//Reduce
const nums = [1, 2, 3, 4];
const reducer = (previous, current) => previous + current;

// 1 + 2 + 3 + 4
console.log(nums.reduce(reducer));

//Persons
const names = ["Mayra", "Kira", "Navi", "Alma"];
class Person {
  constructor(name) {
    this.name = name;
  }
}
function getPerson(names) {
  const newNames = [];
  for (let i = 0; i < names.length; i++) {
    newNames.push(new Person(names[i]));
  }
  console.log(newNames);
}
getPerson(names);
