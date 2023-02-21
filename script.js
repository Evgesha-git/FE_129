// let elem = document.getElementById('id1');

// console.log(elem);

// elem.style.background = '#dcd341';

// elem.setAttribute('class', 'active');
// elem.classList.add('active');

// let elem2 = document.querySelector('#id2');

// console.log(elem2);

// elem2.style.width = '150px';

// let elems = document.getElementsByClassName('class_test');

// console.log(elems);

// let elems2 = document.querySelectorAll('.class_test');

// console.log(elems2);

function changeColor(selector, style, marker, child) {
    let elem = document.querySelectorAll(selector);

    elem.forEach(function(e){
        console.log(e.classList.contains(marker));
        if (e.classList.contains(marker)){
            let ch = e.querySelector(child);
            for(let key in style){
                ch.style[key] = style[key];
            }
        }
    });
}

function elemStyle(elem, styles){
    for(let key in styles){
        elem.style[key] = styles[key];
    }
}

// {
//     background: 'yellow',
//     fontSize: '24px'
// }


let div = document.createElement('div');
div.setAttribute('id', 'id5');
div.setAttribute('class', 'class_test');
div.setAttribute('data-time', '12:38');
div.setAttribute('data-date', '21.02.2023');

div.innerHTML = `<span class="title">Lorem, ipsum dolor.</span>
<span class="text">Lorem ipsum dolor sit amet.</span>`;

document.body.append(div);

let div2 = createElement('div',
    [
        ['class', 'class_test'],
        ['id', 'id6'],
        ['data-time', '21:01']
    ],
    createElement('span', 
        [
            ['class', 'text']
        ],
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem.'
    )
);

document.body.append(div2);

function createElement(tag, attr = null, content = null){ //[[attrName, attr], [attrName, attr], ...]
    if (typeof tag !== 'string') return;
    let elem = document.createElement(tag);
    if (attr){
        if (attr.length > 0){
            attr.forEach(at => elem.setAttribute(at[0], at[1]));
        }
    }

    if (content){
        if (typeof content === 'string'){
            elem.innerHTML = content;
        }else{
            elem.innerHTML = content.outerHTML;
        }
    }

    return elem;
}  