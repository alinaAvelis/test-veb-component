class SearchPanel extends HTMLElement { 
    connectedCallback() {

        let titleText = this.getAttribute('titleText');
        let inputType = this.getAttribute('inputType');
        let nameInput = this.getAttribute('nameInput');
        let inputId = this.getAttribute('inputId');
        let classInput = this.getAttribute('classInput');
        const placeholderText = this.getAttribute('placeholderText') ? this.getAttribute('placeholderText') : " ";
        // const onChangeHundle = this.getAttribute('onChangeHundle');
       
        this.innerHTML = `
        <template id="searchFormTmplt">
            <style> /* стили меню */ </style>
            <div class="row" slot="input">
            <page-title text=${titleText}></page-title>
                <p id="mess"></p>            
                <simple-input  classInput=${classInput}  type=${inputType} idInput=${inputId}   inputName=${nameInput} placeholderText=${placeholderText}
                   ></simple-input>
            </div>
        </template>`;

    }

    static get observedAttributes() {
        return [titleText, inputType, nameInput, placeholderText];
    }
    
}

export default SearchPanel;