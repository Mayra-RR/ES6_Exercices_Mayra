import "./styles.css";

//Closure
function buildSaludo() {
  const saludo = "Holi boli";

  const saludar = () => {
    console.log(saludo);
  };
  return saludar;
}
const builder = buildSaludo();
builder();

//Rest parameter
function people(user, ...others) {
  console.log(user);
  console.log(...others);
}
people("Fer", "Mayra", "Mariana");

//Spread operator
function team(captain, ...players) {
  console.log(captain, ...players);
}
team("Fer", "Mayra", "Mariana");
