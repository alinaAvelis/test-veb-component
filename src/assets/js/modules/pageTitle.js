class PageTitle extends HTMLElement {
      
    connectedCallback() {
      this.innerHTML = `<h2>
      ${this.getAttribute('text')}
      </h2>`
    }

    static get observedAttributes() {
      return [forInput, text];
    }
  }

  export default PageTitle;