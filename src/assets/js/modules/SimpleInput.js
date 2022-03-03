
class SimpleInput extends HTMLElement  {
      
    connectedCallback() {
      // const shadow = this.attachShadow({mode: 'open'}) || undefined;
      const type = this.getAttribute('type') || undefined;
      const placeholderText = this.getAttribute('placeholderText');
      const name = this.getAttribute('inputName') || undefined;
      const id = this.getAttribute('idInput') || undefined;
      // let inputValue = this.getAttribute('inputValue');
      // const newValue = (e) => {return e.target.value};
      const classInput =  this.getAttribute('classInput');
      // const onChangeHundle = this.getAttribute("onChangeHundle");
      this.innerHTML = `
      <style>
        .input {
          display: block;
          margin-top: 5px;
          padding: 4px;
          border: 1px solid black;
          font-size: 16px;
          font: inherit;

          width: 50%;
          min-width: 300px;
        }

        .search-input {
          display: block;
          margin-top: 5px;
          padding: 4px;
          border: 1px solid black;
          
          font-size: 16px;
          font: inherit;

          width: 100%;
          min-width: 300px;
        }
      </style>

      <input class=${classInput} type=${type}  name=${name} id=${id}  placeholder=${placeholderText} >
      ` 
      
      // this.shadowRoot.addEventListener('keydown', (e) => {
      //   if (e.code === "Enter") {
      //     onChangeHundle;
      //     alert(onChangeHundle);
      //   }
      // })
      
    }

    static get observedAttributes() {
      return [type, inputName, InputValue, idInput, placeholderText, classInput];
    }
}

export default SimpleInput;