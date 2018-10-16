const PubSub = require('../helpers/pub_sub.js');

const FormView = function(){

};

FormView.prototype.bindEvents = function(){
  // console.log();
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    // console.log(event);
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    PubSub.publish('FormView:number-submitted', inputtedNumber);
    console.log(inputtedNumber);
  })
};
// debugger
module.exports = FormView;
