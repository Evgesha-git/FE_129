const calc = selector => {
    const calcs = document.querySelectorAll(selector);

    const calcHandler = calc => {
        const rez = calc.querySelector('.rezult');
        const buttons = calc.querySelector('.buttons');
        let a = '0';
        let b = '';
        let func = '';

        buttons.addEventListener('click', e => {
            let button = e.target;
            if (!button.classList.contains('btn')) return;

            if (button.closest('.main')) {
                a += button.innerText;
                console.log(a);
                render();
            }
            if (button.closest('.oper')) {
                if (!b) {
                    b = a;
                    a = '0';
                }
                if (button.classList.contains('rez')) {
                    oper();
                    return;
                }
                func = button.innerText;
                render();
            }
            if (button.closest('.top')) {
                if (button.classList.contains('clear')) {
                    clear();
                    return;
                }
                switch (button.innerText) {
                    case '%':
                        a = +a / 100;
                        render();
                        break;
                    case '+/-':
                        a = +a > 0 ? -(+a) : Math.abs(+a);
                        render();
                        break;
                    default:
                        break;
                }
            }
        });

        const clear = () => {
            a = '0';
            b = '0';
            func = '';
            render();
        }

        const oper = () => {
            switch (func) {
                case '+':
                    a = Number(a) + +b;
                    render();
                    break;
                case '-':
                    a = +b - +a;
                    render();
                    break;
                case '*':
                    a = +b * +a;
                    render();
                    break;
                case '/':
                    a = +b / +a;
                    render();
                    break
                default:
                    break;
            }
            a = '0';
            b = '0';
            func = '';
        }

        const render = () => {
            rez.innerText = parseFloat(a);
        }
    }

    calcs.forEach(c => calcHandler(c));
}

calc('.container')