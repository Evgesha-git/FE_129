const filterGalery = selector => {
    const containers = document.querySelectorAll(selector);

    const filterHandler = container => {
        const tags = container.querySelector('.tags');
        const cards = container.querySelectorAll('.card');

        tags.addEventListener('click', e => {
            let tag = e.target;
            if (tag.tagName !== 'LI') return;

            let type = tag.dataset.main;
            if (!type) return;

            console.log(type);

            cards.forEach(elem => {
                if (type !== 'all') {
                    if (elem.dataset.type !== type) {
                        elem.classList.add('hide');
                        setTimeout(() => elem.classList.add('none'), 300);
                    } else {
                        elem.classList.remove('none');
                        setTimeout(() => elem.classList.remove('hide'), 10);
                    }
                } else {
                    elem.classList.remove('none');
                    setTimeout(() => elem.classList.remove('hide'), 10);
                }
            });
        });
    }

    containers.forEach(c => {
        filterHandler(c);
    });
}

filterGalery('.container');