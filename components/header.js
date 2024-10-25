const template = document.createElement('template');
template.innerHTML = `
    <header>
        <a href="/">Home</a>
        <span>  |  </span>
        <a href="/ticket">Ticket</a>
        <span>  |  </span>
        <a href="/store ">Store</a>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('x-header', Header);