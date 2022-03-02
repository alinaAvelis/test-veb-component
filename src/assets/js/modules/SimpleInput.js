
class SimpleInput extends HTMLElement  {
      
    // constructor() {
    //     super();
    //     this.addEventListener('change', () => {
    //       alert("Привет!")
    //     });
    //   }

    connectedCallback() {
      // const shadow = this.attachShadow({mode: 'open'});
      const type = this.getAttribute('type');
      const placeholderText = this.getAttribute('placeholderText');
      const name = this.getAttribute('inputName');
      this.innerHTML = `
      <input type=${type}  name=${name} >
      `       
    }

    static get observedAttributes() {
      return [type, text, inputName, value];
    }
}

export default SimpleInput;