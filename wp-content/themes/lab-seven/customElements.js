class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
		this.innerHTML = '<a href="registration">Registration</a>&nbsp;<a href= "Products">Products</a>';
	}
}

customElements.define("x-twosided", TwoSidedMarket);

class RegistrationElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a href="/Registration">Registration</a>
        `;
    }
}

customElements.define('x-registration', RegistrationElement);



class ProductsElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a href="/Products">Products</a>
        `;
    }
}

customElements.define('x-products', ProductsElement);
