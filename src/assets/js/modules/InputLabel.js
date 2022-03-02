class InputLabel extends HTMLElement {
      
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
      let forInput = this.getAttribute('forInput');
      shadow.innerHTML = `
      <style>
        .label {
          display: block;
          min-width: 10em;
        }
      </style>
      <label class="label" for=${forInput}>
         ${this.getAttribute('text')}
      </label>`
    }

    static get observedAttributes() {
      return [forInput, text];
    }
  }

export default InputLabel;