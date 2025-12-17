  const calcJsElt = document.querySelector('.js-calculation-p');
  const ansJsElt = document.querySelector('.js-answer-p');

  const answers = {
    calcaltionText : '',
    currentAns : ''
  }  

  function inputNumber(text){
    if(answers.calcaltionText.length < 15){
      addChar(text);
    }
//    answers.calcaltionText = '123.123.123.123'
//    console.log(answers.calcaltionText)
/*
    try{
      answers.currentAns = eval(x)
    }
    catch(e){
    }
*/
    
    if( answers.calcaltionText.length > 12){
      calcJsElt.classList.remove('calculation-p');
      calcJsElt.classList.remove('calculation-p-change-9');
      calcJsElt.classList.add('calculation-p-change-12');
    }
    else if( answers.calcaltionText.length > 9){
      calcJsElt.classList.remove('calculation-p');
      calcJsElt.classList.add('calculation-p-change-9');
    }
    else{
      calcJsElt.classList.add('calculation-p');
      calcJsElt.classList.remove('calculation-p-change-9');
      calcJsElt.classList.remove('calculation-p-change-12');
    }
    calcJsElt.innerText = answers.calcaltionText.replaceAll('*','x');

    try{
      changeUndefined();
    }
    catch(e){
      return;
    }
  }

  function calculationBtn(){
//    console.log(answers.calcaltionText)
    calcJsElt.innerText = eval(answers.calcaltionText);
    answers.calcaltionText = '';
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

  function deleteChar(){
    answers.calcaltionText = answers.calcaltionText.slice(0,answers.calcaltionText.length-1);
    //console.log(answers.calcaltionText);

    calcJsElt.innerText = answers.calcaltionText;
    try{
      changeUndefined();
    }
    catch(e){
      return;
    }
  }

  function changeUndefined(){
    if(answers.calcaltionText === ''){
      ansJsElt.innerText = ' ';
    }
    else{
      ansJsElt.innerText = eval(answers.calcaltionText);
    }
  }

  function addChar(text){
    const signAry = ['/','*','-','+'];
    const withSign = ['/','*'];

    if(((answers.calcaltionText === '' || answers.calcaltionText === '-' || answers.calcaltionText === '+') && withSign.includes(text))){
      return;
      //nothing :)
    }
    else{
      if(signAry.includes(answers.calcaltionText.at(-1))&& signAry.includes(text)){
        answers.calcaltionText = answers.calcaltionText.slice(0,answers.calcaltionText.length-1)+text;
      }
      else if(answers.calcaltionText.at(-1) === '.' && text === '.'){
        return;
      }
      else if(answers.calcaltionText.at(-1) === '.' && text === '.'){
        
      }
      else{
        answers.calcaltionText += text;
      }
    }
    
  }