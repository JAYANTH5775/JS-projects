function fizzbuzz(num)
    {
        if (num %3==0)
        {
            alert("fizz")
            mul3.push(num);
          }
        else if (num %5 == 0)
        {
            alert("buzz")
            mul5.push(num);
          }
        else{
            alert("fizzbuzz")
        }
    }

var mul3=[];
var mul5 =[];

while(true)
    {
    
        num = prompt("enter the number here")
        fizzbuzz(num);
       
    n =prompt("do u want to continue (y/n)");
    if(n == "n")
       {
           alert(mul3);
           alert(mul5);
        console.log(mul3);
        console.log(mul5);
        break
       }
        else
    {
        continue;
    }
    }