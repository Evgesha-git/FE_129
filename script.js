// let arr = [12, false, 'Текст', 4, 2, -5, 0];
// let arrBuf = [];

// while (arr.length){
//     let el = arr.pop() + '';
//     el = el.split('').reverse().join('');
//     arrBuf.push(el);
// }

// console.log(arrBuf);

// let arr2 = [5, 9, 21, , , 9, 78, , , , 6, 0];
// let count = 0;

// for (let i = 0; i < arr2.length; i++){
//     if (!arr2[i] && arr2[i] !== 0){
//         count++;
//     }
// }

// console.log(count);

// let arr = [];

// while (1){
//     let a = prompt();
//     if(isNaN(a)) continue;
//     if (a === '' && a !== '0') break;
//     arr.push(+a);
// }

// console.log(arr);

// let arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2, 0];
// let fIndex = arr.indexOf(0);
// let lIndex = arr.lastIndexOf(0);
// let summ = 0;
// let sRez = '';

// if (fIndex !== lIndex){
//     for (let i = fIndex; i < lIndex; i++){
//         summ += arr[i];
//     }
//     sRez = `Сумма элементов массива между нулями равна: ${summ}`;
// }else{
// document.write('<p>В массиве нет пар нулей</p>');
//     sRez = 'В массиве нет пар нулей';
// }

// 'Сумма элементов массива между нулями равна:'

// document.write(`<p>${summ ?
//     `Сумма элементов массива между нулями равна: ${summ}` :
//     `В массиве нет пар нулей`}</p>`);

// document.write('<p>' + sRez + '</p>');

// let h = +prompt();
// let c = h;
// let e = 1;

// for (let i = 1; i < h * 2; i++) {
//     if (i <= h) {
//         let s = "";
//         for (let j = 0; j < h - i; j++) {
//             s += " ";
//         }
//         let d = "";
//         for (let j = 0; j < i * 2 - 1; j++) {
//             d += "^";
//         }

//         document.write("<pre>" + s + d + s + "</pre>");
//     } else {
//         let s = "";
//         for (let j = 0; j < i - h; j++) {
//             s += " ";
//         }
//         let d = "";
//         if (h * 2 - i === 1){
//             for (let j = i * 2 + 2; j > h * 2 + i; j--) {
//                 d += "^";
//             }
//         }else{
//             for (let j = 1; j < i * 2 - e; j++) {
//                 d += "^";
//                 c += 2;
//                 e++;
//             }
//         }

//         document.write("<pre>" + s + d + s + "</pre>");
//     }
// }

// for (let i = h; i > 0; i--){
//     document.write(`<pre>${' '.repeat(h - i)}${'^'.repeat(i * 2 - 1)}${' '.repeat(h - i)}</pre>`);
// }

// function fName(a){
// console.log(a + a);
// return a + a;
// }
//
// function f2(a, b, c){
// return c(a, b);
// }
//
// console.log(f2(2, 3, function(c, d){return c * d}));

// fName2();

// const fName2 = function(){

// }

// (function(){
//     alert('Я сам по себе');
// }());

function count(a) {
    if (isNaN(a)) {
        console.log("Не число");
        return;
    }

    if (a < 0) {
        console.log("Число не положительное");
        return;
    }

    if (a % 2 === 0) {
        console.log(a * 2);
    } else {
        console.log(a / 2);
    }
}
