const galery = selector => {
    let galeryContainer = document.querySelectorAll(selector);

    const galeryHandler = container => {
        const imgs = container.querySelector('.photos');
        const main = container.querySelector('.main');
        const close = main.querySelector('.close');
        const img = main.querySelector('img');

        imgs.addEventListener('click', e => {
            let elem = e.target;
            if (elem.tagName !== 'IMG') return;
            let src = elem.dataset.img;
            if (!src) return;

            img.src = src;
            main.classList.add('active');
        });

        close.addEventListener('click', () => {
            main.classList.remove('active');
            setTimeout(() => img.src = '', 300);
        });
    }

    galeryContainer.forEach(container => {
        galeryHandler(container)
    });
}

galery('.container')