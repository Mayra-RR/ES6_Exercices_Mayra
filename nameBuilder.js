class NameBuilder {
  constructor(lastName) {
    this.lastName = lastName;
  }
  //   getNameBuilder() {
  //     // return (firstName) => {
  //     return firstName => firstName + " " + this.lastName;
  //   }
  // }
  getNameBuilder() {
    return firstName => `${firstName} ${this.lastName}`;
  }
}
const family = new NameBuilder("Regalado");
const buildFullName = family.getNameBuilder();
const familyNames = ["Mayra", "Kira", "Navi", "Alma"];
for (let i = 0; i < familyNames.length; i++) {
  const fullName = buildFullName(familyNames[i]);
  console.log(fullName);
}
