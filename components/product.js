const template = document.createElement('template');
template.innerHTML = `
    <article>
        <img src="" alt="" />
        <h1></h1>
        <h2></h2>
        <button>Checkout</button>
    </article>
`;

class Product extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);

        const name = this.getAttribute('name');
        const price = this.getAttribute('price');
        const image = this.getAttribute('image');
    
        const h1 = shadowRoot.querySelector('h1');
        const h2 = shadowRoot.querySelector('h2');
        const img = shadowRoot.querySelector('img');
    
        h1.textContent = `${name}`;
        h2.textContent = `Rp.${price}`;
        h2.textContent = `Rp.${price}`;
        img.alt = `image of ${name}`;
        img.src = `${image}`;
    }
}

customElements.define('x-product', Product);