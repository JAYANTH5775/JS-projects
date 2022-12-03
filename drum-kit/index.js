var count =0; 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for ( var i =0; i< numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function ()
{
    var ButtonInnerHTML = this.innerHTML;
    makesound(ButtonInnerHTML);
    ButtonAnimation(ButtonInnerHTML);

        });
    }

document.addEventListener("keydown",function(event){
    makesound(event.key);
    ButtonAnimation(event.key);
});

function makesound (key){
    switch (key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play(); 
            break; 
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();

            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();

            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        default: console.log("invalid keyy");
        count+=1;
        if(count==3){
            alert("you have entered invalid key 3 times Make sure you are pressing the right key");
        }


    }

// var audio = new Audio("sounds/tom-3.mp3");
// audio.play(); 
    }


    function ButtonAnimation(currentkey)
    {
        var activeButton = document.querySelector("."+currentkey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
    

    }
