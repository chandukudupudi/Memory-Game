/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 var allCards = document.querySelectorAll('.card');
 var openedCards =  [];

// here we have the evenListener to open/close cards
 allCards.forEach(function(card) {
   card.addEventListener ('click', function() {
       openedCards.push(card);
       card.classList.add('open', 'show');

       if (openedCards[0].type === openedCards[1].type) {
         openedCards[0].classList.add('match');
         openedCards[0].classList.add('open');
         openedCards[0].classList.add('show');

         openedCards[1].classList.add('match');
         openedCards[1].classList.add('open');
         openedCards[1].classList.add('show');

       if (openedCards.length <= 1) {
         setTimeout(function() {
              openedCards.forEach(function(card) {
               card.classList.remove('open', 'show');
               });
               openedCards = [];
         }, 1000);
       }



// cards will shuffle but they will not be random
     function shuffle(array) {
           var currentIndex = array.length, temporaryValue, randomIndex;

               while (currentIndex !== 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
    }

       return array;
}


      function CountMoves () {
          moves++;
          counter.innerHTML = moves;

     if( moves === 10 || moves === 20)
     removeStar ();
     }

       function getStars() {
         var star = document.querySelectorAll('.stars')
         if (star.style.visibility = 'hidden')
           star.style.visibility = 'visible';
         }
           star.style.visibility = 'hidden'
         }
          getStars();
          getStars();


// Game Timer for player

function startTime () {
  var time = 0;

  var clock = setInterval(function() {
    timer++;
  } 1000;
}

function timeDisplay () {
    const clock = document.querySelcetor('score-panel');
    console.log('clock');
    score-panel.innerHTML = time;
}
   function stopClock{
     clearInterval(interval);
   }


//the modal

function toggleModal () {
    const modal = document.querySelector ('.my-modal');
    modal.classList.toggle('hide');
}
    toggleMdoal()
    toggleModal()
