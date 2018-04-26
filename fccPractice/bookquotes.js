// var myParagraph = ' “Of course I’ll go Kate. You should get back to bed. Would you like some Nyquil or Tylenol?” “Nyquil, please. Here are the questions and my mini-disc recorder. Just press record here. Make notes, I’ll transcribe it all.” “I know nothing about him,” I murmur, trying and failing to suppress my rising panic. “The questions will see you through. Go. It’s a long drive. I don’t want you to be late.” “Okay, I’m going. Get back to bed. I made you some soup to heat up later.” I stare at her fondly. Only for you, Kate, would I do this.';

function findQuotes(myParagraph){
  const regex = /“([^\n]*?)”/g;
  const result = [];
  let match;
  while (match = regex.exec(myParagraph)) {
    // note the change: 0 => 1
    result.push(match[1]);
  }
  return result;  
}

// console.log(result.length);

function quoteMe() {
    var quotesArray = [];
    var finalText = "";
    var text = document.getElementById('bookText').value;
    quotesArray = findQuotes(text);

    for (var n = 0; n < quotesArray.length; n++){
      finalText += '<li>' + quotesArray[n] + '</li>';
      // document.write('<p>' + quotesArray[n] + '</p>');
    }    
    document.getElementById('output').innerHTML = finalText;
}


var myParagraph = `
"Of course I’ll go Kate. You should get back to bed. Would you like some Nyquil or Tylenol?"
"Nyquil, please. Here are the questions and my mini-disc recorder. Just press record here. Make notes, I’ll transcribe it all."
"I know nothing about him," I murmur, trying and failing to suppress my rising panic. "The questions will see you through. Go. It’s a long drive. I don’t want you to be late." "Okay, I’m going. Get back to bed. I made you some soup to heat up later." I stare at her fondly. Only for you, Kate, would I do this.`

const rgx = /"(.*?)"/g;

const dialogue = myParagraph
    .match(rgx) // Match using our regex
    .map(result => result.replace(/"/g, "")) // Remove quotes from each result, remove this line if you want to keep the enclosing quotes

console.log("the dialog was" + dialogue);
paragraphArray = myParagraph.slice(1, myParagraph.length-2).split('""');
console.log(paragraphArray[0]);


