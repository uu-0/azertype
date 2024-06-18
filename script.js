let listeMots = ["Cachalot", "Pétunia", "Serviette"];

let score = 0;

let motTape = prompt("Veuillez taper le mot : " + listeMots[0]);

if (motTape === listeMots[0]) {
  score++;
  console.log("gg");
} else{
    console.log("vous avez fait une erreur");
}

console.log("Score final : " + score);

motTape = prompt("Veuillez taper le mot : " + listeMots[1]);

if (motTape === listeMots[1]) {
    score++;
    console.log("gg");
  } else{
      console.log("vous avez fait une erreur");
  }

  
console.log("Score final : " + score);

motTape = prompt("Veuillez taper le mot : " + listeMots[2]);

if (motTape === listeMots[2]) {
    score++;
    console.log("gg");
  } else{
      console.log("vous avez fait une erreur");
  }

  
console.log("Score final : " + score);

for (let i = 0; i < 3; i++) {
    console.log(i)
}