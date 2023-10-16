const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    //start the game
    const startGame = () =>{
        const playBtn = document.querySelector(".introbutton");
        const introScreen = document.querySelector (".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //playmatch
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector (".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorALL ('.hands img');

      hands.forEach(hand => {
        hand.addEventListener('animationend', function (){
            this.style.animation = "";
        })
      })
        //computer options
        const computerOptions = ['rock', 'paper','sissors'];

        options.forEach(option=>{
            option.addEventListener("click", function (){
                //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions [computerNumber];
     setTimeout(() => {
           //here is where we call compare hands
           compareHands(this.textContent, computerChoice);
           //update images
          playerHand.src =`./assets/${this.textContent}.png`;
          computerHand.src =`./assets/${computerChoice}.png`;
          }, 2000)
        //animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
        
            });
        });

     };
     const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

     }
     const compareHands = (playerChoice, computerChoice) =>{
        //update text
        const winner = document.querySelector("winner");
        //checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "it is a tie";
            return;
            }
            //check for rock
            if(playerChoice === "rock"){
                if(computerChoice === "sissors"){
                    winner.textContent = "player wins";
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = "computer wins";
                    cScore++;
                    updateScore();
                    return;
                }
            }
             //check for paper
             if(playerChoice === "paper"){
                if(computerChoice === "sissors"){
                    winner.textContent = "computer wins";
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = "player wins";
                    pScore++;
                    updateScore();
                    return;
                }
            }
             //check for sissors
             if(playerChoice === "sissors"){
                if(computerChoice === "rock"){
                    winner.textContent = "computer wins";
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = "player wins";
                    pScore++;
                    updateScore();
                    return;
                }
            }

     }
    //is call all the inner functions
    startGame();
};

//start the game function
game();
  
