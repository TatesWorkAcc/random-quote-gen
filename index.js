const quotes = [
    "Be yourself; everyone else is already taken.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "So many books, so little time.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.)",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
]
// an array of quotes


const quoteElement = document.getElementById("quote")
// gets the id of an empty h1 element
const usedIndexes = new Set()
// set is faster to check if an element exists to be used to check if the quote has been used or not before
function generateQuote() {
    if (usedIndexes.size >= quotes.length){
        // makes sure there is quotes left
        usedIndexes.clear()
        // clears the set so more quotes can be gened again
    }        
    while (true){
        const randomIdx = Math.floor(Math.random() * quotes.length)
        // length tells you how many elements is in the array will give, floor will always round down 9.6 will be rounded to 9

        if (usedIndexes.has(randomIdx)) continue
        // continue will loop the while loop back up, this checks if the quote has already been generated before 

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        // innerHTML is changing the text
        usedIndexes.add(randomIdx)
        // adds to the set to know what has been used
        break
    }
}