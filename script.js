// function makeArr (a, b){
//     let arr = [];

//     for (let i = a; i < b; i++){
//         arr.push(i);
//     }

//     return arr;
// }

// function printArr(arr){
//     for(let el of arr){
//         console.log(el);
//     }
// }

// // printArr(makeArr(+prompt('a'), +prompt('b')));

// function inArr(arr, min, max){
//     let num = makeNum(min, max);
    
//     if (arr.length === 0) return num;

//     if (arr.includes(num)){
//         return inArr(arr, min, max);
//     } else {
//         return num;
//     }
// }

// -> call -> call -> call -> .. -> call -> rez
//rez <- .. <- ..<- .. <- .. <- .. <- .. <-  

// function makeNum(a, b){
//     return Math.floor(Math.random() * (b - a) + a);
// }

// function getRandArr(count, min, max){
//     let arr = [];

//     if (count > max - min) return 'Количество элементов не может быть больше диапазона чисел';

//     for (let i = 0; i < count; i++){
//         arr.push(inArr(arr, min, max));
//     }

//     return arr;
// }


// const f1 = () => {
//     //Тело функции
// }

// function f2_2 (a){
//     return () => arguments;
// }

// const f2 = a => a ** a;

// const f3 = (a, b) => arguments;


// function makeCountert(){
//     let count = 0;

//     return function (){
//         return count++;
//     }
// }

// let counter1 = makeCountert();
// let counter2 = makeCountert();


// function pyramid(len){
//     let marker = null;
    
//     if (arguments.length > 1) {
//         if (arguments[1] !== ' ' && String(arguments[1]).length === 1){
//             marker = arguments[1];
//         }
//     } 

//     for(let i = 1; i < len + 1; i++){
//         for (let j = 0; j < i; j++){
//             document.write(marker ? marker : i);
//         }

//         document.write('<br/>');
//     }
// }

// function memo (fn){
//     let cache = {};
//     return a => {
//         let n = a;
//         if (n in cache){
//             return cache[n]
//         }else{
//             let rez = fn(n);
//             cache[n] = rez;
//             return rez;
//         }
//     }
// }

// const fibonachi = memo((a) => {
//     return a < 3 ? 1 : fibonachi(a - 1) + fibonachi(a - 2)
// });

// function fib(a){
//     return a < 3 ? 1 : fib(a - 1) + fib(a - 2);
// }

// var i = 12;

// var arr = [];

// for (var i = 0; i < 100; i++){
//     arr.push(i);
// }

// console.log(i);

// let j = 45; 

// let arr2 = [];

// for (let j = 0; j < 100; j++){
//     arr2.push(j);
// }

// console.log(j);

function summ (num){
    let sum = 0;
    num += '';

    for (let n of num){
        sum += +n;
    }

    if (sum < 10) return sum;

    return summ(sum);
}