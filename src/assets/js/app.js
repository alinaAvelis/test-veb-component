
import SimpleInput from './modules/SimpleInput';
import InputLabel from'./modules/InputLabel';
import PageTitle from './modules/pageTitle';

import SearchPanel from './modules/searchPanel';
import FormElement from './modules/formElement';

window.addEventListener('DOMContentLoaded', () => {

  try {

    customElements.define('simple-input', SimpleInput);
    customElements.define('input-label', InputLabel);
    customElements.define('search-panel', SearchPanel);
    customElements.define('form-element', FormElement);
    customElements.define('page-title', PageTitle);
    class CompanyForm extends HTMLElement {
      connectedCallback() {
        
        this.innerHTML = `
          <search-panel classInput="search-input" titleText="Компания&#160;или&#160;ИП" inputId="party" inputType="search" nameInput="search" placeholderText="Введите&#160;название,&#160;ИНН,&#160;ОГРН&#160;или&#160;адрес&#160;организации"></search-panel>
          

          <form-element classInput="input" labelText='Краткое&#160;наименование' labelInput="shirtName" inputType="text" nameInput="shirtName" inputId="name_short" tmpltId="shirtNameInputTmplt"></form-element>

          <form-element classInput="input" labelText="Полное&#160;наименование" labelInput="fullName" inputType="text" nameInput="fullName" inputId="name_full"  tmpltId="fullNameTmplt"></form-element>

          <form-element classInput="input" labelText="ИНН/КПП" labelInput="requisites" inputType="text" nameInput="requisites" inputId="inn_kpp"  tmpltId="requisitesInputTmplt"></form-element>

          <form-element classInput="input" labelText="Адрес" labelInput="adress" inputType="text" nameInput="adress" inputId="address"  tmpltId="adressInputTmplt"></form-element>
        
        `;
      }
    }

    customElements.define('company-form', CompanyForm);

    const addNewSection = (arr) => {
      let newArr = [];
      newArr = arr;

      let newSection = document.createElement('section');
      newArr.forEach(item => newSection.append(item));  
      return newSection;
    }

    const tmpltArr = [
      shirtNameInputTmplt.content.cloneNode(true),
      fullNameTmplt.content.cloneNode(true),
      requisitesInputTmplt.content.cloneNode(true),
      adressInputTmplt.content.cloneNode(true)
    ]
    
    let newForm = document.createElement('div');
    newForm.classList.add('form');

    newForm.append(addNewSection([searchFormTmplt.content.cloneNode(true)]));
    newForm.append(addNewSection(tmpltArr));

    document.body.append(newForm);
  
  } catch(e) {
    console.log(e)
  } 

  try { 
    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
    let token = "fce922071c3ec9d8e9b308717ca63389eb07fb84";
    let query = "сбербанк";

    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

     
      fetch(url, options)
      .then(response => response.json())
      .then(result => { 
        let data;
        let newData = {...result};
        data = newData.suggestions; 
        const partyInput = document.getElementById('party');
        const nameShirtInput = document.getElementById('name_short');
        const nameFullInput = document.getElementById('name_full');
        const pinnKppInput = document.getElementById('inn_kpp');
        const addressInput = document.getElementById('address');


        const innArr =  data.map(item => item.data.inn);
        console.log(`Доступные ИНН: ${innArr}`);

        // const mess = document.getElementById('mess');
        // mess.innerHTML='';

        partyInput.addEventListener('keydown', function(e) {
;
          mess.innerHTML = ' ';
            if (e.code === "Enter") {
              data.forEach(item => {
                if(this.value === item.data.inn) {
                  // mess.innerHTML = ' ';
                  nameShirtInput.value = item.data.name.short;
                  nameFullInput.value = item.data.name.full_with_opf;
                  pinnKppInput.value = `${item.data.inn}/${item.data.kpp}`;
                  addressInput.value = item.data.address.value;
                } else  {
                  // mess.innerHTML='Такого ИНН нет в списке. Проверьте правильность написания';
                  // mess.classList.add('mess-error');
                }
              })
            }
        })

      })
      .catch(error => alert('Возникли проблемы с получением данных с сервера. Пожалуйста, попробуйте позже.'));


  } catch(e) {
    console.log(e);
  }

});



