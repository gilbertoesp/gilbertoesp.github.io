import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class GilbertoespGithubIoApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'gilbertoesp-github-io-app'
      }
    };
  }
}

window.customElements.define('gilbertoesp-github-io-app', GilbertoespGithubIoApp);
