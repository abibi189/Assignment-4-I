class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class PostsElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a href="Posts">Posts</a>
        `;
    }
}

customElements.define("x-posts", PostsElement);

class AliaBibi extends HTMLElement {
	connectedCallback(){
		this.innerHTML = "By Alia Bibi";
	}
}
customElements.define ("x-alia", AliaBibi)