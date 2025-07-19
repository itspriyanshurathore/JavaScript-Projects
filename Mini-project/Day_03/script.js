const quotes = [
  "Believe in yourself.",
  "Do one thing every day that scares you.",
  "Dream it. Wish it. Do it.",
  "Stay positive. Work hard. Make it happen.",
  "Turn your wounds into wisdom.",
  "Don’t stop until you’re proud."
];

// ///////// 
const Changetext = document.querySelector('#quote');
const button = document.querySelector('#new-quote');

button.addEventListener('click', function(){
     let randomNumber = Math.floor(Math.random() * quotes.length );
     Changetext.textContent = `${quotes[randomNumber]}` ;

     /// you can use it if you dont give the length;
    // if(randomNumber < quotes.length){
    //     //console.log(`number ${randomNumber}` );  
    // }
     

});



