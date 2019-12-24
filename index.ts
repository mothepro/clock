import { LitElement, html, property, customElement, css } from 'lit-element'

@customElement('lit-clock')
export default class extends LitElement {

  @property({ type: Number })
  ticks = 0

  @property({ type: Boolean })
  pause = false

  @property({ type: Boolean, attribute: 'pause-on-blur' })
  pauseOnBlur = false

  static readonly styles = css`
  :host[hidden] {
    display: none
  }

  :host {
    font-family: monospace
  }
  `

  get shouldTick() {
    if (this.pause)
      return false
    if (this.pauseOnBlur)
      return document.hasFocus()
    return true
  }

  protected readonly render = () => html`
    ${Math.floor(this.ticks / 60 ** 2) > 0
      ? Math.floor(this.ticks / 60 ** 2) + ':' // Hours (only if minutes are overflowing)
      : ''
    }${
    (Math.floor(this.ticks / 60) % 60).toString().padStart(2, '0') // Minutes
    }:${ // No space around colon
    Math.floor(this.ticks % 60).toString().padStart(2, '0') // Seconds
    }
  `

  protected firstUpdated() {
    setInterval(
      () => this.shouldTick && this.dispatchEvent(new CustomEvent('tick', { detail: this.ticks++ })),
      1000)
  }
}
