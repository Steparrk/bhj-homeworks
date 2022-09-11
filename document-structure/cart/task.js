const productsList = Array.from(document.querySelectorAll('.product'));

class Product {
	constructor(conteiner) {
		this.conteiner = conteiner;
		this.buttonInCart = conteiner.querySelector('.product__add');
		this.article = conteiner.getAttribute('data-id');
		this.image = conteiner.querySelector('img').getAttribute('src');
		this.cartProducts = document.querySelector('.cart__products');
		this.sumProduct = conteiner.querySelector('.product__quantity-value');

		this.registerEvents();
	}
	addOne() {
			this.sumProduct.textContent = +this.sumProduct.textContent + 1;
	}

	deleteOne() {
		if(this.sumProduct.textContent > 1){
			this.sumProduct.textContent -= 1;
		}
	}

	inCart() {
		this.haveProduct = Array.from(document.querySelectorAll('.cart__product')).find(el => el.getAttribute('data-id') === this.article);

		if(this.haveProduct !== undefined) {
			this.haveProduct.querySelector('.cart__product-count').textContent = +this.haveProduct.querySelector('.cart__product-count').textContent + +this.sumProduct.textContent;
			return;
		}
		this.cartProducts.insertAdjacentHTML('beforeEnd', '<div class="cart__product" data-id=""><img class="cart__product-image" src=""><div class="cart__product-count"></div></div>');
		this.cartProducts.lastChild.setAttribute('data-id', this.article);
		this.cartProducts.lastChild.querySelector('img').setAttribute('src', this.image);
		this.cartProducts.lastChild.querySelector('.cart__product-count').textContent = this.sumProduct.textContent;
	}

	registerEvents() {
		this.callInCart = this.inCart.bind(this);
		this.buttonInCart.addEventListener('click', this.callInCart);

		this.callAddOne = this.addOne.bind(this);
		this.conteiner.querySelector('.product__quantity-control_inc').addEventListener('click', this.callAddOne);

		this.callDeleteOne = this.deleteOne.bind(this);
		this.conteiner.querySelector('.product__quantity-control_dec').addEventListener('click', this.callDeleteOne);
	}
}

productsList.forEach(item => new Product(item));
