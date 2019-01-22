import { html, LitElement } from 'lit-element/lit-element.js'
import './app-child.js'

export class AppMain extends LitElement {
  static get properties () {
    return {
      name: { type: String }
    }
  }

  constructor () {
    super()
    this.name = 'Main element'
  }

  render () {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>
        <p>From the ${this.name}</p>
        <app-child></app-child>
      </div>
    `
  }
}

window.customElements.define('app-main', AppMain)
