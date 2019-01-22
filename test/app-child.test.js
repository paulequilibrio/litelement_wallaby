import { html } from 'lit-element/lit-element.js'
import { fixture, expect } from '@open-wc/testing'

import '../src/app-child.js'

describe('<app-child>', () => {
  it('has a default property name', async () => {
    const el = await fixture(html`<app-child></app-child>`)
    expect(el.name).to.equal('Child element')
  })

  it('has a default property message', async () => {
    const el = await fixture(html`<app-child></app-child>`)
    expect(el.message).to.equal('Tested with Wallaby.js')
  })

  it('change message from input', async () => {
    const el = await fixture(html`
      <app-child></app-child>
    `)
    const paperInput = el.shadowRoot.querySelector('paper-input')
    paperInput.value = 'Tested with Karma, too.'
    paperInput.dispatchEvent(new window.Event('keyup'))
    expect(el.message).to.equal('Tested with Karma, too.')
  })

  it('reset message', async () => {
    const el = await fixture(html`
      <app-child .message=${'New message'}></app-child>
    `)
    const paperInput = el.shadowRoot.querySelector('paper-input')
    paperInput.dispatchEvent(new window.Event('keyup'))
    expect(el.message).to.equal('Tested with Wallaby.js')
  })
})
