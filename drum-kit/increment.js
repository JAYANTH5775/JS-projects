num = prompt("enter the number till you need to find the fibbanocci number"); 
f0 = 0; 
count=0;
f1 = 1; 
var arr =[];
arr[0]=0;
arr[1]=1;
while( count!=num)
    {
        f2 = f0+f1;
        arr.push(f2);
        f0=f1;
        f1=f2;
        count++;
        
        
  }

alert(arr);






