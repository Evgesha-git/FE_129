let date = '2025-12-31';
// date = date.replace('-', '/');
let regDate = /([0-9]{4})-(\d{2})-(\d{2})/g;

let date2 = date.replace(regDate, '$3/$2/$1');
console.log(date2);

console.log('-------------------');

const replaceString = function (str){
    let regExp = /ab+a/g;
    return str.match(regExp);
}

function mail(email) {
    let regMail = /^[a-zA-Z0-9-_\.]{2,}@[a-z0-9\.]{2,11}\.[a-z]{2,11}$/g;

    return regMail.test(email);
}

const number = function(phone){
    let reg = /^\+375\((25|29|33|44)\)\d{3}-?\d{2}-?\d{2}$/g;
    return reg.test(phone);
}

const addres = function(url){
    let reg = /(https?:\/\/[0-9]?[a-z][a-z0-9]+(?:\.?[0-9a-z]+)+\.[a-z]{2,11})(\/.+\/(?:[^\?\s]+))?(\?[^#]+)?(#\w+)?/g;

    let groups = reg.exec(url);

    console.log([...groups]);

    return [...groups].filter(function(elem, index){
        return index !== 0 ? elem : null;
    });
}

let arr1 = [1, 2, 3];
let arr2 = arr1;
let arr3 = [...arr1, ...[4, 5, 6]];

let obj = {
    name: 'Alex',
    age: 24,
};

function firstUpper(str) {
    str = str.split(' ');

    str = str.map(function(elem){
        if(elem) return elem[0].toUpperCase() + elem.substring(1);
    });

    return str.join(' ');
}