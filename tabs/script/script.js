const tab = selector => {
    const containers = document.querySelectorAll(selector);

    const tabHandler = container => {
        const buttons = container.querySelector('.tabs__buttons');
        const contents = container.querySelector('.tabs__content');

        const show = e => {
            const button = e.target;
            if (button.tagName !== 'LI') return;
            if (!button.classList.contains('add')){
                [...buttons.children].forEach((el, i) => {
                    el !== button ? el.classList.remove('active') : el.classList.add('active');
                    el === button ? showContent(i) : null;
                })
            }else{
                addContent(buttons.children.length);
            }
        }

        const showContent = i => {
            [...contents.children].forEach((el, count) => {
                i !== count ? el.classList.remove('active') : el.classList.add('active');
            });
        }

        const addContent = l => {
            let button = document.createElement('li');
            let content = document.createElement('li');

            button.innerText = `tab ${l}`;
            content.innerText = prompt();

            contents.append(content);
            const add = container.querySelector('.add');
            add.before(button);
        }

        buttons.addEventListener('click', show);
    }

    containers.forEach(container => tabHandler(container));
}

tab('.container');