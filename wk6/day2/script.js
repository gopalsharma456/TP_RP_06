// let money = 0

// if (money) {
//     console.log(`you can buy the toy worth ${money}`)
// }else{
//     console.log(`you can not buy the toy`)
// }

// let age = '18'

// if (age == 18) {
//     console.log(`congrats you are ${age}`)
// }

// if (age === 18) {
//     console.log(`congrats you are ${age}`)
// } else {
//     console.log(`you are not ${age}`)
// }

// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log(
//     `Dolphins win the trophy with score of ${scoreDolphins.toFixed(
//       2
//     )} compared to ${scoreKoalas.toFixed(2)}`
//   );
// } else if (scoreDolphins < scoreKoalas) {
//   console.log(
//     `Koalas win the trophy with score of ${scoreKoalas.toFixed(
//       2
//     )} compared to ${scoreDolphins.toFixed(2)}`
//   );
// } else {
//   console.log(`Both win the trophy`);
// }

// let day = "saturday";

// switch (day) {
//     case 'monday':
//         console.log("damn it's monday again")
//         break;
//     case 'tuesday' ||  'wednesday' || 'thursday':
//     // case 'wednesday':
//     // case 'thursday':
//         console.log('Its Midweek')
//     break;
//     case 'friday':
//         console.log(`weekend is here`)
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Yey its Holiday!!!!!!!`)
//         break;
//     default:
//         console.log('Not a valid day')
//         break;
// }

// if (day == "monday") {
//   console.log("damn it's monday again");
// } else if (day == "tuesday" || day == "wednesday" || day == "thursday") {
//   console.log("Its Midweek");
// } else if (day == "friday") {
//   console.log(`weekend is here`);
// } else if (day == "sunday" || day == "saturday") {
//     console.log(`Yey its Holiday!!!!!!!`);
// } else {
//     console.log("Not a valid day");
// }
    
// let age = 18
// age >= 18 ? console.log('You can drive') : console.log('You can\'t drive')

// console.log(`can i drive? ${age >= 18 ? 'Yes' : 'No '}`)

let bill = 50;

// if(bill >= 50 && bill <= 300){
//     console.log(`The Bill was ${bill}, and tip was ${bill * 0.15}, and total Value ${bill + (bill * 0.15)}`)
// }else{
//     console.log(`The Bill was ${bill}, and tip was ${bill * 0.2} and total Value ${bill + (bill * 0.2)}`)
// }

bill >= 50 && bill <= 300 ? 
console.log(`The Bill was ${bill}, and tip was ${bill * 0.15}(@15%) and total Value ${bill + (bill * 0.15)}`)
 : 
console.log(`The Bill was ${bill}, and tip was ${bill * 0.2}(@20%), and total Value ${bill + (bill * 0.2)}`)
