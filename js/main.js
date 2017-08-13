var quote = ["Take me sir; take me hard.", "I am to misbehave.", "When you can't run, you crawl. And when you can't crawl, when you can't do that... you find someone to carry you.", "Also? I can kill you with my brain.", "Going on a year now, nothins twixed my neathers not run on batteries.", "Well, we may not have parted on the best of terms. I realize certain words were exchanged. Also, certain bullets.", "I'm a leaf on the wind. Watch how I soar.", "Is there anything else on your mind that I should know about? There's all sorts of twists and cul-de-sacs. It's wild.", "Shiny. Let's be bad quys.", "Doctor, I'm takin' your sister under my protection here. If anything happens to her, anything at all, I swear to you, I will get very choked up. Honestly, there could be tears.", "This is the captain. We have a little problem with out entry sequence, so we may experience some slight turbulence and then - explode.", "You can't stop the signal.", "Do you know what the definition of a hero is? Someone who gets other people killed. You can look it up later.", "Bullet in the brain pan, squish."];

var character = ["-Zoe", "-Mal", "-Tracey", "-River", "-Kaylee", "-Mal", "-Wash", "-Wash", "-Jayne", "-Mal", "-Mal", "-Mr. Universe", "-Zoe", "-River"];

function genQuote() {
    var randomNum = Math.floor(Math.random() * quote.length);
    document.getElementById('newQuote').innerHTML = quote[randomNum];
    document.getElementById('newCharacter').innerHTML = character[randomNum];

    return quote[randomNum]
}

function shareTweet(){
    var quote = genQuote();
    window.open("https://twitter.com/intent/tweet?text=" + quote);
    const quoteText = document.getElementById('newQuote').innerHTML;
    const tweetButton = document.getElementById('tweet-button');

    tweetButton.onclick(function (event) {
        event.preventDefault();
    const escapedText = encodeURIComponent(quoteText);

});

}

$("#tweet-button").on('click', shareTweet);

