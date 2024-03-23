// function logger(n){
//     console.log(`My name is ${n}`)
// }

// logger('abc')
// logger('xyz')
// logger('pqr')
// logger('mon')

// function fruitProcessor(apples, oranges){
//     let juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// console.log(fruitProcessor(3,5))
// let AppleJuice = fruitProcessor(6,0)
// console.log(AppleJuice)

// function with function name
// function calAge(birthYear) {
//   let age = 2024 - birthYear;
//   return age;
// }
// console.log(calAge(1999));

// //function expression without name
// let calAge1 = function (birthYear) {
//   return 2024 - birthYear;
// };
// console.log(calAge1(2000));

// //Arrow function
// let calAge2 = (birthYear) => 2024 - birthYear;
// console.log(calAge2(1998));

// let retirementAge = birthYear => {
//     let age = 2024 - birthYear
//     let retireAge = 60 - age
//     return `You will retire in ${retireAge} years.`
// }

// console.log(retirementAge(1998))

// function cutFruit(fruit){
//     return fruit * 4
// }

// function foodProcessor(apples, oranges){
//     let applePieces = cutFruit(apples)
//     let orangePieces = cutFruit(oranges)
//     let juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
//     return juice
// }

// console.log(foodProcessor(2,4))

//problem solving - challenge
// team with more than twice the average score wins after 3 rounds

let calcAverage = (score1, score2, score3) => {
  let res = (score1 + score2 + score3) / 3;
  return res;
};

let scoreDolphins = calcAverage(60, 50, 50);
let scoreKoalas = calcAverage(20, 20, 20);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > (avgKoalas * 2)) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if ((avgDolphins * 2) < avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}
// checkWinner(scoreDolphins, scoreKoalas);