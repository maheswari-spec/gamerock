let playGame=confirm("Shall we play rock,paper, or scissors?");
if(playGame){
    let playerChoice = prompt("Please enetr rock,paper,or scissors");
    if(playerChoice){
        let PlayerOne = playerChoice.trim().toLowerCase();
        if(
            playerOne==="rock"||
            playerOne==="paper"||
            playerOne==="scissors"
        ){
            let computerChoice =Math.floor(Math.random()*3+1);
            let computer=
            computerChoice===1
            ?"rock"
            :computerChoice===2
            ?"paper"
            :"scissors";
        let result =
        playerOne === computer
        ? "Tie game!"
        :playerOne==="rock"&&computer==="paper"
        ?`playerOne:${playerOne}\ncomputer:${computer}\nComputer wins`
        :playerOne==="paper"&&computer==="scissors"
        ?`playerOne:${playerOne}\ncomputer:${computer}\nComputer wins`
        :playerOne==="scissors"&&computer==="rock"
        ?`playerOne:${playerOne}\ncomputer:${computer}\nComputer wins`
        :`playerOne:${playerOne}\ncomputer:${computer}\nplayerOne wins!`;
        alert(result);
        let playAgain =confirm("play again");
        playAgain?location.reload():alert("thanks for playing");



        }else{
            alert("You didnt enter rock papaer,or scissors");
        }
    }else{
        alert("I guess you changes your mind Maybe next time");
    }
    
}
else{
    alert("Ok,maybe next time")
}
