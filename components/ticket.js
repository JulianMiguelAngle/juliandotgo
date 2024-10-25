const template = document.createElement('template');
template.innerHTML = `
    <article>
        <h1></h1>
        <h2></h2>

        <ul>
            <li id="venue"></li>
            <li id="price"></li>
        </ul>
        <button>Checkout</button>
    </article>
`;

class Ticket extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);

        const name = this.getAttribute('name');
        const date = this.getAttribute('date');
        const venue = this.getAttribute('venue');
        const price = this.getAttribute('price');
    
        const h1 = shadowRoot.querySelector('h1');
        const h2 = shadowRoot.querySelector('h2');
        const venueElement = shadowRoot.getElementById('venue');
        const priceElement = shadowRoot.getElementById('price');
    
        h1.textContent = `${name}`;
        h2.textContent = `${date}`;
        venueElement.textContent = venue;
        priceElement.textContent = `Rp.${price}`;
    }
}

customElements.define('x-ticket', Ticket);