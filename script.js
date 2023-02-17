let user = {
    id: 76452,
    name: "Alex",
    userName: "Alex4568",
    age: 29,
    email: "alex@mail.com",
    address: "....",
};

function User(name, userName, email, age, address) {
    let self = this;
    this.age = age;
    this.userName = userName;
    this.email = email;
    this.address = address;
    this.id = getId();

    this.getName = function () {
        return name;
    };

    this.setName = function (n) {
        let pattern = /[А-ЯЁа-яё]/g;
        if (pattern.test(n)) {
            name = n;
            return this;
        } else {
            return "Невалидное имя";
        }
    };

    this.getInfo = () => {
        return getFullInfo();
    };

    const getFullInfo = () => {
        // return self;
        // return this;
        return `${this.getName()}, ${this.userName}, ${this.email}`;
        return `${self.getName()}, ${self.userName}, ${self.email}`;
    };

    function getId() {
        return Math.floor(Math.random() * 100);
    }
}

let user2 = new User("Alex", "Alex4568", "alex@mail.com", 23, "....");

function Calculator() {
    let state = false;
    let a = null;
    let b = null;
    let operation = null;
    // this.#a = null; -> В классах

    this.calculateStart = function(newState){
        let reg = /(?:on|off)/g;
        if (!reg.test(newState)) return;
        if(newState === 'on'){
            state = true;
        }else{
            state = false;
            a = null;
            b = null;
            operation = null;
        }
    }

    this.getA = function () {
        if(!state) return;
        return a;
    };

    this.getB = function () {
        if(!state) return;
        return b;
    };

    this.setA = function (numA) {
        if(!state) return;
        if (isNaN(numA)) return;
        a = +numA;
    };

    this.setB = function (numB) {
        if(!state) return;
        if (isNaN(numB)) return;
        b = +numB;
    };

    this.setOperation = function (oper) {
        if(!state) return;
        let reg = /[\+\-\*\/]/g;
        if (oper.length > 1) return;
        if (!reg.test(oper)) return;
        operation = oper;
    };

    this.getRezult = function(){
        if(!state) return;
        if (a === null ||
            b === null||
            !operation) return;

        switch (operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return;
        }
    }
}
