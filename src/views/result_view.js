const PubSub = require('../helpers/pub_sub.js')

const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeChecker:result-calculated', (event) =>{
    const isNumberPrime = event.detail;
    // debugger;
    this.displayResult(isNumberPrime);

  })
};

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `The result is ${result}`;
  // debugger;
}
module.exports = ResultView;
