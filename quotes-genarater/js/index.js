

var myQuotes=["When you reach the end of your rope, tie a knot in it and hang on.Franklin D. Roosevelt","The way get started is to quit talking and begin doing.Walt Disney"," The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.-Winston Churchill","Don’t let yesterday take up too much of today -Will Rogers"," If you cannot do great things, do small things in a great way -Napoleon Hill"," The journey of a thousand miles begins with one step.Lao Tzu","You learn more from failure than from success. Don’t let it stop you. Failure builds character -Unknown","A new command I give you: Love one another.As I have loved you-Jesus Christ", 
 ]
function quoteGenarator(){ 
 var randomNumbers=Math.floor(Math.random()*(myQuotes.length));
  document.getElementById("quoteDesplay").innerHTML=myQuotes[randomNumbers]
}
document.getElementById("quoteDesplay").setAttribute("href", "https://twitter.com/intent/tweet?text=" + myQuotes[randomNumbers][0]
  )