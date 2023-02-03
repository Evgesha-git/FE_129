// for (let i = 1; i < 10; i++){
//     for (let j = 1; j < 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// let summ = 0,
//     count = 0;

// while (1) {
//     let a = +prompt();

//     // if (!a) break; // if a == 0 -> a == false -> a -> false -> !a -> true

//     if (a === 0) break;

//     if (isNaN(a)) {
//         alert('Введено не число');
//         continue;
//     }

//     summ += a;
//     count++;
// }

// console.log(summ);
// console.log(summ / count);

// let nums = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

// let min = Infinity,
//     max = -Infinity;

// let buff = '';

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] !== ' '){
//         buff += nums[i];
//     }else{
//         if (+buff > max) max = +buff;
//         if (+buff < min) min = +buff;
//         buff = '';
//     }
// }

// console.log(max, min);

// let num = prompt('Вводить строго числа!');
// let len = num.length;
// let summ = 0;
// let rev = '';

// for (let i = 0; i < num.length; i++){
//     summ += +num[i];
// }

// for (let i = len - 1; i >= 0; i--){
//     rev += num[i];
// }

// console.log(`Вводимое число: ${num}, цифр в числе - ${len}, сумма = ${summ}, обратный порядок: ${rev}`);

let s = "1, 2, 3, 4, 5, 6, 7, 8, 9"; // -1-2-3-4-5-6-7-8-9-
let rez = "-";

for (let i = 0; i < s.length; i++) {
    if (s[i] !== " " && s[i] !== ",") {
        rez += s[i] + "-";
    }
}

console.log(rez);

let a = [];
// let a2 = new Array();
// let a3 = new ArrayBuffer();
// let a4 = new Int8Array();

a[0] = 0;
a.push(1);
a.push(2);
a.unshift(-1);
a.unshift(-2);

let b = a.pop();
let c = a.shift();

a.reverse();

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let last2 = arr.splice(arr.length - 2, 2);

// let newArr = last2.concat(arr);

// let str = prompt().split("");

// for (let i = 0; i < str.length; i++) {
//     if (i === 0 && str[i] !== " ") str[i] = str[i].toUpperCase();
//     if (i > 0 && str[i] !== " " && str[i - 1] === " ") {
//         str[i] = str[i].toUpperCase();
//     }
// }

// console.log(str.join(""));

// while (1) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         let index = arr.indexOf(arr[i]);
    //         arr.splice(index, 1);
    //     }
    // }
// }

// let indexes = [];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         indexes.push(arr[i]);
//     }
// }

// while (indexes.length){
//     let index = arr.indexOf(indexes[0]);
//     arr.splice(index, 1);
//     indexes.splice(0, 1);
// }

// arr = arr.filter(function(item) {return item % 2 !== 0}); // сложный вариант

let arr2 = [3, 21, 43, 1, 32, 11, 1432, 2342, 23, 6];

let sorted = arr2.sort(function (a, b){
    return b - a;
});

console.log(sorted);

let arr3 = [1];

console.log(arr3.length);

arr3[100] = 'lol';

console.log(arr3.length);

let arr4 = [];

for (let i = 0; i < arr3.length; i++) {
    if(arr3[i]){
        arr4.push(arr3[i]);
    }
}

arr3 = arr4;