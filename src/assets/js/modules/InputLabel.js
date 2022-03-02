class InputLabel extends HTMLLabelElement {
      
    connectedCallback() {
      let forInput = this.getAttribute('forInput');
      this.innerHTML = `<label for=${forInput}>
      Hello, ${this.getAttribute('text')}
      </label>`
    }

    static get observedAttributes() {
      return [forInput, text];
    }
  }

export default InputLabel;