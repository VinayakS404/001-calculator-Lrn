  const calcJsElt = document.querySelector('.js-calculation-p');
  const ansJsElt = document.querySelector('.js-answer-p');

  const answers = {
    calcaltionText : '',
    currentAns : ''
  }  

  function inputNumber(text){
    answers.calcaltionText += text
//    console.log(answers.calcaltionText)
/*
    try{
      answers.currentAns = eval(x)
    }
    catch(e){
    }
*/
    if( answers.calcaltionText.length >= 11){
      calcJsElt.classList.remove('calculation-p')
      calcJsElt.classList.add('calculation-p-change-11')
    }
    else{
      calcJsElt.classList.add('calculation-p')
      calcJsElt.classList.remove('calculation-p-change-11')
    }
    calcJsElt.innerText = answers.calcaltionText.replaceAll('*','x');

    try{
      ansJsElt.innerText = eval(answers.calcaltionText);
    }
    catch(e){}
  }

  function calculationBtn(){
//    console.log(answers.calcaltionText)
    calcJsElt.innerText = eval(answers.calcaltionText);
    answers.calcaltionText = ''
    ansJsElt.innerText = '';
 //    calcJsElt.innerText = '123,123,123,123,123'
 //    ansJsElt.innerText = '123,123,123,123,123'
  }

  function clearScreen(){
    ansJsElt.innerText = '';
    calcJsElt.innerText = '';
    answers.calcaltionText = '';
    answers.calcaltionText = '';

  }
