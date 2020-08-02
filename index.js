let para= document.getElementById('js');
let container=document.getElementById('container')
let main=document.getElementById("main")
js.addEventListener('click', function run(){
console.log("Mouse inside");
js.style.display='none';
container.style.display='block';
main.style.backgroundColor = "white";

var audio = new Audio('abc1.mp3');
audio.play();


});

// js.addEventListener('mouseout', function run(){
// console.log('Mouse now went outside');

// });

