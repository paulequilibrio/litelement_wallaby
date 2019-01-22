import { html, LitElement } from 'lit-element/lit-element.js'
import '@polymer/paper-input/paper-input.js'

export class AppChild extends LitElement {
  static get properties () {
    return {
      name: { type: String },
      message: { type: String },
      initialMessage: { type: String }
    }
  }

  constructor () {
    super()
    this.name = 'Child element'
    this.initialMessage = 'Tested with Wallaby.js'
    this.message = this.initialMessage
  }

  updateMessage (event) {
    this.message = event.currentTarget.value || this.initialMessage
  }

  render () {
    return html`
      <style>
        :host {
          display: block;
        }
        span {
          color: red;
        }
      </style>
      <div>
        <p>Message in the ${this.name}: <span>${this.message}</span></p>
        <paper-input
          name="message"
          label="Message"
          placeholder="Type a new message"
          @keyup="${this.updateMessage}"
        ></paper-input>
      </div>
    `
  }
}

window.customElements.define('app-child', AppChild)
