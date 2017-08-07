var quote = ["Everything is shiny, Captain.", "Take me sir; take me hard.", "I am to misbehave."];

function genQuote() {
    var randomNum = Math.floor(Math.random() * quote.length);
    document.getElementById('newQuote').innerHTML = quote[randomNum];
}
