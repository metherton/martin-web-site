import { html, css, LitElement } from 'lit-element';

export class PageMain extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        text-align: center;
      }

      svg {
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      logo: { type: Function },
    };
  }

  constructor() {
    super();
    this.title = 'Hello open-wc world!';
    this.logo = html``;
  }

  render() {
    return html`
      <section style="display: flex"><aside><img src="./packages/page-main/src/martin.png" alt="Martin Etherton"></aside><article><h1>Martin Etherton</h1></article></section>
    `;
  }
}
