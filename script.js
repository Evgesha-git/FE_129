// let a = +prompt();

// // if (isNaN(a)){
// //     console.log('Не число');
// // }else{
// //     if (a > 0){
// //         if (a % 2 === 0){
// //             console.log(a * 2);
// //         }else{
// //             console.log(a / 2);
// //         }
// //     }else{
// //         console.log('Число не положительное');
// //     }
// // }

// // if (a != 0){
// //     console.log('true');
// // }

// // if (a){
// //     console.log('true');
// // }

// let b = isNaN(a) ?
//     'Не число':
//     a > 0 ?
//         a % 2 ? // 0 или 1
//             a / 2: // Результат 1
//             a * 2: // Результат 0
//         'Число не положительное'

// console.log(b);

// if (a % 2){
//     console.log(a / 2)
// }else{
//     console.log(a * 2)
// }

// let day = +prompt("Введите день");
// let overYear = null;
// if (day) {
//     if (!isNaN(day)) {
//         if (day > 365) {
//             overYear = Math.floor(day / 365);
//             day %= 365; // day = day % 365
//         }

//         console.log(day);

//         let mont = Math.floor(day / 31) + 1;

//         console.log(mont);

//         switch (mont) {
//             case 1:
//                 console.log("Зима");
//                 console.log("Январь");
//                 break;
//             case 2:
//                 console.log("Зима");
//                 console.log("Фераль");
//                 break;
//             case 3:
//                 console.log("Весна");
//                 console.log("Март");
//                 break;
//             case 4:
//                 console.log("Весна");
//                 console.log("Апрель");
//                 break;
//             case 5:
//                 console.log("Весна");
//                 console.log("Май");
//                 break;
//             case 6:
//                 console.log("Лето");
//                 console.log("Июнь");
//                 break;
//             case 7:
//                 console.log("Лето");
//                 console.log("Июль");
//                 break;
//             case 8:
//                 console.log("Лето");
//                 console.log("Август");
//                 break;
//             case 9:
//                 console.log("Осень");
//                 console.log("Сентябрь");
//                 break;
//             case 10:
//                 console.log("Осень");
//                 console.log("Октябрь");
//                 break;
//             case 11:
//                 console.log("Осень");
//                 console.log("Ноябрь");
//                 break;
//             default:
//                 console.log("Зима");
//                 console.log("Декабрь");
//         }
//     }
// }

let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
];

let date = new Date();

/**
 * for
 * while
 * do .. while
 */

// let c = null;

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     if (!(i % 9)) {
//         c++;
//         if (c == 10) {
//             console.log(c);
//             break;
//         }
//     }
// }

// let s = "hello world";
// let rez = ''

// for (let i = 0; i < s.length; i++) {
//     if (s[i] == "o") {
//         rez += "a";
//     } else {
//         rez += s[i];
//     }
// }

// console.log(rez);

// let i = 0;

// let counter = 0;

// while (1) {
//     console.log(i);
//     if (!(i % 9)) {
//         counter++;
//         if (counter == 10) {
//             console.log(counter);
//             break;
//         }
//     }
//     i++;
// }

// for (let i = 0; i < 5; ++i){
//     console.log(i);
// }

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// {
//     let i = 0;

//     while (i < 5) {
//         console.log(i++);
//     }
// }

// {
//     let i = 0;

//     while (i < 5) {
//         console.log(++i);
//     }
// }

while (0){
    console.log('Выполнился while');
}

do {
    console.log('Выполнился do .. while');
} while (0);

let s = 'Выполнился do .. while';

for (let k in s){
    console.log(k);
}

for (let c of s) {
    console.log(c);
}