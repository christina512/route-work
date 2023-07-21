
var quotesArr = [
    {
        quote : " “Be yourself; everyone else is already taken.” ",
        writer : "Oscar Wilde"
    },
    {
        quote : " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        writer : "Oscar Wilde"
    },
    {
        quote : " “So many books, so little time.” ",
        writer : " Albert Einstein"
    },
    {
        quote : " “You only live once, but if you do it right, once is enough.” ",
        writer : "Mae West"
    },
    {
        quote : " “Be the change that you wish to see in the world.” ",
        writer : "Mahatma Gandhi"
    },
    {
        quote : " “If you tell the truth, you don't have to remember anything.” ",
        writer : "Mark Twain"
    },
    {
        quote : " “A friend is someone who knows all about you and still loves you.” ",
        writer : " Elbert Hubbard"
    },
    {
        quote : " “It does not do to dwell on dreams and forget to live.”",
        writer : "J.K. Rowling"
    },
    {
        quote : "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” ",
        writer : "John Green"
    },
    {
        quote : " “We are all in the gutter, but some of us are looking at the stars.” ",
        writer : " Oscar Wilde"
    },

]


// var randomUsed = [];
// function randomQuotes (){
//     if (randomUsed.length === quotesArr.length) {
//         randomUsed = [];
//     };
//     var randomNum ;
// do {
//    randomNum = Math.floor((Math.random() * quotesArr.length));
// } while (randomUsed.includes(randomNum));
// randomUsed.push(randomNum);
// return quotesArr[randomNum];
// }


// function addingQuote(){
//     var finalQuote = randomQuotes ();
//     document.getElementById("quote").innerText = finalQuote.quote ;
//     document.getElementById("quoteWriter").innerText = "-- " + finalQuote.writer;
// }




function randomQuotes(){
    var randomIndex ;
    // randomIndex = Math.floor((Math.random() * quotesArr.length));
    // if(randomIndex===randomQuotes.last){
    //     randomIndex = Math.floor((Math.random() * quotesArr.length));
    // }
    // randomQuotes.last = randomIndex;
    // console.log(randomIndex);
    // return randomIndex
    do {
        randomIndex = Math.floor((Math.random() * quotesArr.length));
    }while (randomIndex===randomQuotes.last);
    randomQuotes.last = randomIndex;
    console.log(randomIndex);
    return randomIndex;
}
function addingQuote(){
    var randomIndex = randomQuotes();

    document.getElementById("quote").innerText = quotesArr[randomIndex].quote ;
    document.getElementById("quoteWriter").innerText = "-- " + quotesArr[randomIndex].writer;
}


