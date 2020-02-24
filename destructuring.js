function process(data) {
  const [name, age] = data;

  console.log(name);
  console.log(age);
}
// const data = ["Mayra", 30];
// process(data);

// const data = {
//   name: 'Mayra',
//   age: 30
// }

// const{name} = data;
// console.log(name);

const data = {
  name: "Mayra",
  age: 30,
  lastName: "Regalado",
  mainSkill: {
    technology: "JavaScript",
    experience: 1
  }
};

const {
  name,
  lastName,
  mainSkill: { experience: mainSkill }
} = data;
console.log(name, lastName, mainSkill);

/* class File{
  constructor{
    
  }
}
function sendFile(file){
  if(!file) return null;
  const {
    name = 'unnamed',
    ext = 'txt',
    owner = 'system',
  } = file;
  const result = new File(name, ext, owner);
  console.log('sending...', result);
}
sendFile({name:'tarea'}); */
