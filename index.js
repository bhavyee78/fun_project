let para= document.getElementById('js');
var audio = new Audio('abc1.mp3');
let container=document.getElementById('container')
let main=document.getElementById("main")
js.addEventListener('click', function run(){
audio.play();
console.log("Mouse inside");
js.style.display='none';
container.style.display='block';
main.style.backgroundColor = "white";





});

function toggleHide(){
    audio.play();
    
}

