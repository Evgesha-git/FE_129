class Cart{
    constructor(){
        this.widdget = document.createElement('div');
        this.widdget.classList.add('widget');
        this.cart = [];
        this.cartContainer = document.createElement('div');
        this.cartContainer.classList.add('container');
        this.init = this.init.bind(this);
        this.addCart = this.addCart.bind(this);
    }

    addCart(item){
        this.cart.push(item);
        this.widdget.innerHTML = `
            <a href="#cart">
                ${this.cart.length}
            </a>
        `;
        return true;
    }

    getWdget(){
        let conuter = this.cart.length;

        this.widdget.innerHTML = `
            <a href="#cart">
                ${conuter}
            </a>
        `;

        return this.widdget;
    }

    render(){
        if (!this.cart.length){
            this.cartContainer.innerHTML = '<h2>Корзина пуста</h2>';
            return;
        }
        this.cart.forEach(item => {
            const cartElem = document.createElement('div');
            cartElem.classList.add('cart__item');
            cartElem.innerHTML = `
                <div class="img">
                    <img src="${item.image}"/>
                </div>
                <h3 class="item__title">${item.title}</h3>
                <p class="price">${item.price}</p>
            `;
            this.cartContainer.append(cartElem);
        });
    }

    init(){
        this.render();
        return this.cartContainer;
    }
}

let cart = new Cart();
export const widget = cart.getWdget();
export const addCart = cart.addCart;
const init = cart.init;

export default init;
