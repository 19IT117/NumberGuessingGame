let min = 10,
    max = 20,
    winningnum = Math.floor(Math.random()*10 + min);
    guessleft = 3;

const gameWrapper = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector("#guess-value"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;
gameWrapper.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }

});
guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess < min || guess >max){
      setMessage(`Enter a valid number between ${min} and ${max}`,'red',1500);
  }else{
    if(guess === winningnum){
      guessInput.disabled = true;
      guessInput.style.borderColor = 'green';
      setMessage('Hurray you have won','green',1000);
      guessBtn.value = 'Play Again';
      guessBtn.className +='play-again';
    }else{
      guessleft--;
      if(guessleft === 0){
        guessInput.disabled = true;
        guessInput.style.borderColosr = 'red';
        setMessage(`Reset the game. Correct Answer was ${winningnum}`,'red',1500);
        guessBtn.value = 'Play Again'
        guessBtn.className +='play-again';
      }else{ 
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guessleft} of guess left`,'red',1500);
      guessInput.style.borderColor = 'black';
      }
      
    }
  }
  console.log(guess);
})


function setMessage(msg,color,timeout){
  message.textContent = msg;
  message.style.color = color;
  setTimeout(removeMessage,timeout);

 // console.log(m);
}

function removeMessage(){
  message.textContent ="";
}