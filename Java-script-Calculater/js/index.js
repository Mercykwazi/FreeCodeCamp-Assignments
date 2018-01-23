 var Memory  = "0";      
 var    Current = "0";     
 var     Operation = 0;    
 var  MAXLENGTH = 30; 

function multiplyBy()
{
     var results=document.getElementById("screen");
  results.innerHTML +="*"
}

function divideBy() 
{ 
   var results=document.getElementById("screen");
  results.innerHTML +="/"
}

function subtract() 
{ 
  var results=document.getElementById("screen");
  results.innerHTML +="-"
}

function addition() { 
  
var results=document.getElementById("screen");
  results.innerHTML +="+"
}
function cancel() { 
document.getElementById("screen").innerHTML = ""
}

function dot() { 
var results=document.getElementById("screen");
  results.innerHTML +="."
}

function zero() { 
var results=document.getElementById("screen");
  results.innerHTML +=0
}

function numberOne() { 
document.getElementById("screen").innerHTML += 1
}
function numberTwo() { 
var results=document.getElementById("screen");
  results.innerHTML +=2
}

function numberThree() { 
var results=document.getElementById("screen");
  results.innerHTML +=3
}

function numberFour() { 
var results=document.getElementById("screen");
  results.innerHTML +=4
}
function numberFive() { 
var results=document.getElementById("screen");
  results.innerHTML +=5
}

function numberSix() { 
var results=document.getElementById("screen");
  results.innerHTML +=6
}

function numberSeven() { 
var results=document.getElementById("screen");
  results.innerHTML +=7
}

function numberEight() { 
var results=document.getElementById("screen");
  results.innerHTML +=8
}

function numberNine() { 
var results=document.getElementById("screen");
  results.innerHTML +=9
}
function equal() { 
var value=document.getElementById("screen").innerHTML;
  var ans = eval(value);
  document.getElementById("screen").innerHTML= ans;
 
}
function total(){
  var display =document.getElementById("screen").
innerHTML;
   var answer = document.getElementById("screen").value;
}