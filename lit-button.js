/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html } from 'lit';
import { litButtonStyles } from './lit-button-styles';
import { LitButtonController } from './lit-button.controller';

import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

/**
 * Un boton.
 *
 * @fires clickButton - cuando se cliquea el boton
 * @fires deleteButton - cuando se deletea el boton
 */
export class LitButton extends LitElement {
  static get properties() {
    return {
      code: { type: String },
      description: { type: String },
      active: { type: Boolean },
      closeable: { type: Boolean },
      textCenter: { type: Boolean },
      disabled: { type: Boolean }
    }
  }

  static get styles() {
    return [litButtonStyles]
  }

  constructor() {
    super();
    this.code = "";
    this.description = "";
    this.active = false;
    this.closeable = false;
    this.textCenter = false;
    this.disabled = false;
    this.controller = new LitButtonController(this);
  }


  render() {

    const classes = {
      'lit-button-close': this.closeable,
      'lit-button-no-close': true,
      'disabled': this.disabled
    };

    const clasesDescripcion = {
      "lit-button-description": true,
      "centrar-texto": this.textCenter
    }

    const estilosCodigo = {
      width: this.code ? "10%" : "0%"
    }

    return html`
		<span class="lit-button-container" ?active=${this.active}>
		  <span class="lit-button-code" style=${styleMap(estilosCodigo)} @click=${this.controller._handleClick}>${this.code}</span>
		  <span class=${classMap(clasesDescripcion)} @click=${this.controller._handleClick}>${this.description}</span>
		  <span class="lit-button-close" @click=${this.controller._handleClose} class=${classMap(classes)}></span>
		</span>
	  `;
  }
}

window.customElements.define('lit-button', LitButton);
