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

// const num = function(){
//   PubSub.publish()
// }

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = this.resultText(result)};

  ResultView.prototype.resultText = function(result){
    if (result === true){
      return "${num} This number is indeed prime"}
      else{
        return "This is not a prime number"
      }
  // debugger;
};
module.exports = ResultView;
