guests = []
while(true){
friend =  prompt("enter the friendss list");
guests.push(friend);
 cn = prompt("do u want to continue(y/n)");
    if(cn = "n")
    {
        alert(guests);
         break; 
    }
   
}
var len = guests.length; 
    var ranp = Math.floor(Math.random()*len); 
    alert("the is gonna get paid by "+guests[ranp]);
    
