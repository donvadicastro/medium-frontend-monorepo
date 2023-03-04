import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'islands-arch-webpack';
    this.innerHTML = `<div id="welcome"><h1>Welcome ${title} 👋</h1></div>`;
  }
}

customElements.define('islands-arch-webpack-welcome-custom-element', AppElement);