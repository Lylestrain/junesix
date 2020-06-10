let myBtn_1 = document.querySelector('#btn_1');
let myBox_1 = document.querySelector('#box_1');

let myBtn_2 = document.querySelector('#btn_2');
let myBox_2 = document.querySelector('#box_2');

let myBtn_3 = document.querySelector('#btn_3');
let myBox_3 = document.querySelector('#box_3');

let myBtn_4 = document.querySelector('#btn_4');
let myBox_4 = document.querySelector('#box_4');

const colours = ['yellow', 'blue', 'orange', 'green', 'tan', 'red'];

// box 4

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
const hexBtn = document.querySelector('#btn_4');
const bodyBcg = document.querySelector('#box_4');
const hex = document.querySelector('.hex');

// box 5

const simpleQuotes = [
    {
        name:'author number 1',
        quote:'quote number 1'
    },
    {
        name:'author number 2',
        quote:'quote number 2'
    },
    {
        name:'author number 3',
        quote:'quote number 3'
    },
    {
        name:'author number 4',
        quote:'quote number 4'
    }
]

const quoteBtn = document.querySelector('#btn_5');
const qouteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

// box 6

const sendButton = document.querySelector('#btn_6');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

// box 7

let counter = document.querySelector('#counter');
const addCount = document.querySelector('#addBtn_7');
const lowerCount = document.querySelector('#minusBtn_7');

let count = 0;






myBtn_1.addEventListener('click', changeBG_1);

myBtn_2.addEventListener('click', changeBG_2);

myBtn_3.addEventListener('click', changeBG_3);

// box 4 button

hexBtn.addEventListener('click', getHex);

// box 5 button

quoteBtn.addEventListener('click', displayQuote);

// box 6 button

sendButton.addEventListener('click', sendMessage);

// box 7 buttons

addCount.addEventListener('click', increaseCount);
lowerCount.addEventListener('click', decreaseCount);


function changeBG_1(){
    myBox_1.style.backgroundColor = 'red' ;
  }

function changeBG_2(){
    myBox_2.style.backgroundColor = colours[2] ;
  }

function changeBG_3(){
   // myBox_3.style.backgroundColor = colours[0] ;
   let random = Math.floor(Math.random()*colours.length)
   myBox_3.style.backgroundColor = colours[random] ;
  }

// box 4

function getHex(){
    let hexCol = '#';

    for (i=0 ; i<6 ; i++) {
        let random = Math.floor(Math.random()*hexNumbers.length)
        //console.log(random);
        hexCol += hexNumbers[random];
        //console.log(hexCol);
    }
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
 }

 // box 5

 function displayQuote(){
     let number = Math.floor(Math.random()*simpleQuotes.length);
     //console.log(number);
     qouteAuthor.innerHTML = simpleQuotes[number].name;
     quote.innerHTML = simpleQuotes[number].quote;
 }

 // box 6

 function sendMessage(){
    let content = messageIn.value;
    //console.log(content);
    if (content === ''){
        alert('Please enter something. Current value is empty.');
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
  }

  // box 7

  function increaseCount(){
      count ++ ;
      counter.innerHTML = count ;
  }
  function decreaseCount(){
      count -- ;
      counter.innerHTML = count ;
  }