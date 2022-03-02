
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
          <search-panel classInput="search-input" titleText="Компания&#160;или&#160;ИП" inputType="search" nameInput="search" placeholderText="Введите&#160;название,&#160;ИНН,&#160;ОГРН&#160;или&#160;адрес&#160;организации"></search-panel>

          <form-element classInput="input" labelText='Краткое&#160;наименование' labelInput="shirtName" inputType="text" nameInput="shirtName" inputId="shirtName" tmpltId="shirtNameInputTmplt"></form-element>

          <form-element classInput="input" labelText="Полное&#160;наименование" labelInput="fullName" inputType="text" nameInput="fullName" inputId="fullName"  tmpltId="fullNameTmplt"></form-element>

          <form-element classInput="input" labelText="ИНН/КПП" labelInput="requisites" inputType="text" nameInput="requisites" inputId="requisites"  tmpltId="requisitesInputTmplt"></form-element>

          <form-element classInput="input" labelText="Адрес" labelInput="adress" inputType="text" nameInput="adress" inputId="adress"  tmpltId="adressInputTmplt"></form-element>
        
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

  // try {
  //   const postData = async (url, data) => {
  //     let res = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: data
  //     });
  
  //     return await res.json();
  // };

  
  //   const form = document.querySelector('form');

  //   let messError = form.querySelector('.mess_err');
  //   let messSuccess = form.querySelector('.mess_success');

  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();
        
  //           const formData = new FormData(form);
  //           console.log(formData);

  //           const json = JSON.stringify(Object.fromEntries(formData.entries()));
  //           console.log(json);

  //           postData('mail.php', formData)
  //           .then(data => {
  //               console.log(data);
  //               messSuccess.textContent = 'Спасибо, мы получили вашу заявку. Свяжемся с вами в рабочее время';
  //               messError.textContent = '';

  //           }).catch(() => {
  //             messSuccess.textContent = ' ';
  //             messError.textContent = 'Извините, что-то пошло не так. Попробуйте снова.';
  //           }).finally(() => {
  //               form.reset();
  //           });
  //   }, false);
  // } catch(e) {
  //   console.log(e)
  // } 
       
});



