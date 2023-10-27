function GetRandomBool()
{
    let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    return (randomNumber % 2 == 0) ? true : false;
}

let isBoolOne = GetRandomBool();
let isBoolTwo = GetRandomBool();
let isBoolThree = GetRandomBool();
let isBoolFour = GetRandomBool();
let isBoolFive = GetRandomBool();
let isBoolSix = GetRandomBool();
let isBoolSeven = GetRandomBool();
let isBoolEight = GetRandomBool();
let isBoolNine = GetRandomBool();

let crystal1 = document.querySelector('#crystal1');
let crystal2 = document.querySelector('#crystal2');
let crystal3 = document.querySelector('#crystal3');
let crystal4 = document.querySelector('#crystal4');
let crystal5 = document.querySelector('#crystal5');
let crystal6 = document.querySelector('#crystal6');
let crystal7 = document.querySelector('#crystal7');
let crystal8 = document.querySelector('#crystal8');
let crystal9 = document.querySelector('#crystal9');

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
let button7 = document.querySelector('#button7');
let button8 = document.querySelector('#button8');
let button9 = document.querySelector('#button9');


if(isBoolOne) { crystal1.classList.add("activated"); } else { crystal1.classList.add("deactivated"); }
if(isBoolTwo) { crystal2.classList.add("activated"); } else { crystal2.classList.add("deactivated"); }
if(isBoolThree) { crystal3.classList.add("activated"); } else { crystal3.classList.add("deactivated"); }
if(isBoolFour) { crystal4.classList.add("activated"); } else { crystal4.classList.add("deactivated"); }
if(isBoolFive) { crystal5.classList.add("activated"); } else { crystal5.classList.add("deactivated"); }
if(isBoolSix) { crystal6.classList.add("activated"); } else { crystal6.classList.add("deactivated"); }
if(isBoolSeven) { crystal7.classList.add("activated"); } else { crystal7.classList.add("deactivated"); }
if(isBoolEight) { crystal8.classList.add("activated"); } else { crystal8.classList.add("deactivated"); }
if(isBoolNine) { crystal9.classList.add("activated"); } else { crystal9.classList.add("deactivated"); }


button1.onclick = () => {
    ButtonOne();
    ButtonTwo();
    ButtonFour();
    isVictory();
}

button2.onclick = () => {
    ButtonOne();
    ButtonTwo();
    ButtonThree();
    ButtonFive();
    isVictory();
}

button3.onclick = () => {
    ButtonTwo();
    ButtonThree();
    ButtonSix();
    isVictory();
}

button4.onclick = () => {
    ButtonOne();
    ButtonFour();
    ButtonSeven();
    ButtonFive();
    isVictory();
}

button5.onclick = () => {
    ButtonTwo();
    ButtonFour();
    ButtonSix();
    ButtonEight();
    ButtonFive();
    isVictory();
}

button6.onclick = () => {
    ButtonSix();
    ButtonThree();
    ButtonNine();
    ButtonFive();
    isVictory();
}

button7.onclick = () => {
    ButtonSeven();
    ButtonFour();
    ButtonEight();
    isVictory();
}

button8.onclick = () => {
    ButtonEight();
    ButtonFive();
    ButtonSeven();
    ButtonNine();
    isVictory();
}

button9.onclick = () => {
    ButtonNine();
    ButtonEight();
    ButtonSix();
    isVictory();
}


function ButtonOne()
{
    if(isBoolOne) {
        crystal1.classList.remove("activated");
        crystal1.classList.add("deactivated");
        isBoolOne = false;
    } else {
        crystal1.classList.add("activated");
        crystal1.classList.remove("deactivated");
        isBoolOne = true;
    }
}

function ButtonTwo()
{
    if(isBoolTwo) {
        crystal2.classList.remove("activated");
        crystal2.classList.add("deactivated");
        isBoolTwo = false;
    } else {
        crystal2.classList.add("activated");
        crystal2.classList.remove("deactivated");
        isBoolTwo = true;
    }
}

function ButtonThree()
{
    if(isBoolThree) {
        crystal3.classList.remove("activated");
        crystal3.classList.add("deactivated");
        isBoolThree = false;
    } else {
        crystal3.classList.add("activated");
        crystal3.classList.remove("deactivated");
        isBoolThree = true;
    }
}

function ButtonFour()
{
    if(isBoolFour) {
        crystal4.classList.remove("activated");
        crystal4.classList.add("deactivated");
        isBoolFour = false;
    } else {
        crystal4.classList.add("activated");
        crystal4.classList.remove("deactivated");
        isBoolFour = true;
    }
}

function ButtonFive()
{
    if(isBoolFive) {
        crystal5.classList.remove("activated");
        crystal5.classList.add("deactivated");
        isBoolFive = false;
    } else {
        crystal5.classList.add("activated");
        crystal5.classList.remove("deactivated");
        isBoolFive = true;
    }
}

function ButtonSix()
{
    if(isBoolSix) {
        crystal6.classList.remove("activated");
        crystal6.classList.add("deactivated");
        isBoolSix = false;
    } else {
        crystal6.classList.add("activated");
        crystal6.classList.remove("deactivated");
        isBoolSix = true;
    }
}

function ButtonSeven()
{
    if(isBoolSeven) {
        crystal7.classList.remove("activated");
        crystal7.classList.add("deactivated");
        isBoolSeven = false;
    } else {
        crystal7.classList.add("activated");
        crystal7.classList.remove("deactivated");
        isBoolSeven = true;
    }
}

function ButtonEight()
{
    if(isBoolEight) {
        crystal8.classList.remove("activated");
        crystal8.classList.add("deactivated");
        isBoolEight = false;
    } else {
        crystal8.classList.add("activated");
        crystal8.classList.remove("deactivated");
        isBoolEight = true;
    }
}

function ButtonNine()
{
    if(isBoolNine) {
        crystal9.classList.remove("activated");
        crystal9.classList.add("deactivated");
        isBoolNine = false;
    } else {
        crystal9.classList.add("activated");
        crystal9.classList.remove("deactivated");
        isBoolNine = true;
    }
}

function isVictory()
{
    if(isBoolOne && isBoolTwo && isBoolThree && isBoolFour && isBoolFive && isBoolSix && isBoolSeven && isBoolEight & isBoolNine)
    {
        document.querySelector('#victory').classList.remove("hidden");
        document.querySelector('#game').remove();
    }
}