// const fs = require('fs');
// const {startOfTheDay,startLunch,endtLunch,endOfTheDay} = require('../modules/time')

// const arr_km = [18, 20, 14, 24, 18, 20, 12, 18, 14, 20, 16, 28, 16, 26, 18, 20, 12, 16, 20, 30, 14, 20, 22, 28, 20, 16, 46, 8, 8, 6, 4, 2, 10, 4, 6, 8, 8, 10];
// const arr_km_plus = [19, 21, 15, 25, 19, 21, 13, 19, 15, 21, 17, 29, 17, 27, 19, 21, 13, 17, 21, 31, 15, 21, 23, 29, 21, 17, 47, 9, 9, 7, 5, 3, 11, 5, 7, 9, 9, 11]; 

// //создаём массивы из текстового файла
// const arr_adress = fs.readFileSync('adress.txt').toString().split("\r\n");
// const arr_adress_kmPlus = fs.readFileSync('adress_kmPlus.txt').toString().split("\r\n");
// const sum_arr_adress = fs.readFileSync('adress2.txt').toString().split("\r\n");
// const sum_arr_adress_2 = fs.readFileSync('adress2_2.txt').toString().split("\r\n");

// const km = 0;//document.getElementById('km');


// let i = 10;
// let sum_km = 9;

// console.log(i + sum_km)
// while (sum_km < km) {
//   if(i==27) {
//     i = 0;
//     sum_arr_adress.splice(0,sum_arr_adress.length);
//     fs.writeFileSync('adress2.txt', '', console.log('done'));
//     continue;
//   }
//   if(sum_arr_adress.includes(arr_adress[i]) != false) {
//     i++;
//     continue;
//   }

//   sum_km += arr_km[i];

//   if(sum_km > km) {
//     sum_km -= arr_km[i];
//     break;
//   } else if(sum_km === km) {
//     sum_arr_adress[i] = arr_adress[i];
//     fs.writeFileSync('adress2.txt', arr_adress[i] + '\r\n', {encoding: 'utf8', flag: 'a'})
//     break;
//   } else {
//     sum_arr_adress[i] = arr_adress[i];
//     fs.writeFileSync('adress2.txt', arr_adress[i] + '\r\n', {encoding: 'utf8', flag: 'a'});
//   }

//   i++;
// }

// let difference = km - sum_km;
// let ir = 0;
// for(let r=27; r<arr_km.length; r++) {
//   if (ir==11) {
//     ir = 0;
//     sum_arr_adress_2.splice(0,sum_arr_adress.length);
//     fs.writeFileSync('adress2_2.txt', '');
//   }
//   if(arr_km[r] == difference) {
//     if(sum_arr_adress_2.includes(arr_adress[r]) != false) {
//       ir++;
//       continue;
//     }
//     sum_km += arr_km[r];
//     sum_arr_adress[r] = arr_adress[r];
//     sum_arr_adress_2[r] = arr_adress[r];
//     fs.writeFileSync('adress2_2.txt', arr_adress[r] + '\r\n', {encoding: 'utf8', flag: 'a'});
//     break;
//   }
// }

// fs.readFileSync('index.html', () => {
//   const button = document.getElementById('km');
//   console.log(button)
// })
// // const adressText = document.getElementById('adressText');
// // adressText.innerHTML = sum_arr_adress[0];
// // document.body.append(adressText);
// // console.log(sum_arr_adress);
