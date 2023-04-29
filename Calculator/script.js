const screenDisplay  = document.querySelector('.screen'); 


const  buttons = document.querySelectorAll('.button'); 




let calculation =[]; 

let accumlationCalculation ; 




function  calculate(buttons)
{

    const value = buttons.textContent; 

    if(value  === 'CLEAR')
    {
        calculation =[]; 
        screenDisplay.textContent ="0"; 

    }

    else if (value === '=')
    {
        screenDisplay.textContent = eval(accumlationCalculation); 
        calculation =[]; 
        accumlationCalculation =""; 

    }


    else{
        calculation.push(value); 
        accumlationCalculation = calculation.join(''); 
        screenDisplay.textContent = accumlationCalculation; 

    }
}