class SearchPanel extends HTMLElement { 
    connectedCallback() {
        let titleText = this.getAttribute('titleText');
        let inputType = this.getAttribute('inputType');
        let nameInput = this.getAttribute('nameInput');
        let classInput = this.getAttribute('classInput');
        const placeholderText = this.getAttribute('placeholderText') ? this.getAttribute('placeholderText') : " ";
       
        this.innerHTML = `
        <template id="searchFormTmplt">
            <style> /* стили меню */ </style>
            <div class="row" slot="input">
            <page-title text=${titleText}></page-title>
                
                <simple-input  classInput=${classInput}  type=${inputType}  inputName=${nameInput} placeholderText=${placeholderText}></simple-input>
            </div>
        </template>`;
    }

    static get observedAttributes() {
        return [titleText, inputType, nameInput, placeholderText];
    }
    
}

export default SearchPanel;