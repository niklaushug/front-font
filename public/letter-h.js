import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      font-family: monospace;
    }
  </style>
  <span class="letter">
    H
  </span>
`;

class LetterH extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-h", LetterH);
