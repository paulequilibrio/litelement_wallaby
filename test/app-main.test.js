import { html } from 'lit-element/lit-element.js'
import { fixture, expect } from '@open-wc/testing'

import '../src/app-main.js'

describe('<app-main>', () => {
  it('has a default property name', async () => {
    const el = await fixture(html`<app-main></app-main>`)
    expect(el.name).to.equal('Main element')
  })
})
