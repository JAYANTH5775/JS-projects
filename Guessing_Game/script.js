

let secretNumber = Math.floor(Math.random()*100)+1; 

let guessInput = document.getElementById("guess"); 


let message = document.getElementById("message"); 


function checkGuess()
{
    let guess = parseInt(guessInput.value); 

    if( guess === secretNumber)
    {
        message.innnerHTML ="Congrats !! you guessed the rigth nNumber"; 
        message.style.color="green"

    }
    else if ( guess < secretNumber)
    {
        message.innnerHTML = " Too LOW , try again"; 
        message.style.color = "red"; 
    }

    else if ( guess > secretNumber){

        message.innnerHTML = " too high  try Again"; 
        message.style.color = "red"; 
    }

}

// reset is called whrn user click on the rest  button ; 
function  resetFunc()
{
    secretNumber = Math.floor(Math.random()*100)+1; 
    guessInput.value =""; 
    message.innnerHTML =""; 
}