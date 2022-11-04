// let x = Math.floor(Math.random() * 58) + 1;
// let y = Math.floor(Math.random() * 58) + 1;
// let z = Math.floor(Math.random() * 58) + 1;

document.getElementById('rollButton');


rollButton.onclick = function() {

    const audio = new Audio();
    audio.src = './ting.mp3'
    audio.play();

    let x1 = Math.floor(Math.random() * 58) + 1;
    let x2 = Math.floor(Math.random() * 58) + 1;
    let x3 = Math.floor(Math.random() * 58) + 1;
    let x4 = Math.floor(Math.random() * 58) + 1;
    let x5 = Math.floor(Math.random() * 58) + 1;
    let x6 = Math.floor(Math.random() * 58) + 1;

    document.getElementById('x1label').innerHTML = x1;
    document.getElementById('x2label').innerHTML = x2;
    document.getElementById('x3label').innerHTML = x3;
    document.getElementById('x4label').innerHTML = x4;
    document.getElementById('x5label').innerHTML = x5;
    document.getElementById('x6label').innerHTML = x6;


}