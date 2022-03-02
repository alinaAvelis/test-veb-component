// import SimpleInput from '.SimpleInput';
// import InputLabel from'.InputLabel';

class FormElement extends HTMLElement {
    connectedCallback() {
        console.log(this.innerText)
        let labelText = this.getAttribute('labelText');
        let labelInput = this.getAttribute('labelInput');
        let inputType = this.getAttribute('inputType');
        let nameInput = this.getAttribute('nameInput');
        let inputId = this.getAttribute('inputId');
        let tmpltId = this.getAttribute('tmpltId');
        let classInput = this.getAttribute('classInput');
        let placeholderText = '';
        // customElements.define('simple-input', SimpleInput);
        // customElements.define('input-label', InputLabel);

        // let newformElement = document.createElement('div');
        // newformElement.classList.add('row')
        
        // const shadow = this.attachShadow({mode: 'open'});
        this.innerHTML = `
        <template id=${tmpltId}>
            <style> /* стили меню */ </style>
            <div class="row" slot="input">
                <input-label text=${labelText} forInput=${labelInput}></input-label>
                
                <simple-input  classInput=${classInput}  type=${inputType}  inputName=${nameInput}  idInput=${inputId}  placeholderText=${placeholderText} ></simple-input>
            </div>
        </template>`;
    }

    static get observedAttributes() {
        return [labelText, labelInput, inputType, nameInput, inputId, tmpltId, placeholderText, classInput];
    }

}

export default FormElement;