// * There will be four wine glasses displayed as buttons on the page.

// * The player will be shown a random number at the start of the game.

// * When the player clicks on a glass, it will add a specific amount of points to the player's score. 

//   * This game will hide the amount until the player clicks a glass.
//   * When they do click one, the player's score is updated.

// * The player wins if their total score matches the random number from the beginning of the game.

// * The player loses if their score goes above the random number.

// * The game restarts whenever the player wins or loses.

//   * When the game begins again, the player should see a new random number. Also, all the glasses will have four new hidden values. Of course, the user's score will reset to zero.

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//Variables
//------------------------------------------------------------------------------------------

var randomNum = [];
var winCount = [];
var lossCount = [];
var score = 0;
var champagneWine = "";
var redWine = "";
var whiteWine = "";
var roseWine = "";



//Functions
//------------------------------------------------------------------------------------------
$(document).ready(function () {

    function reset() {

        randomNum = Math.floor((Math.random() * 101) + 18);
        $("#randomNum").text(randomNum);
        champagneWine = Math.floor((Math.random() * 11) + 1);
        redWine = Math.floor((Math.random() * 11) + 1);
        whiteWine = Math.floor((Math.random() * 11) + 1);
        roseWine = Math.floor((Math.random() * 11) + 1);
        score = 0;

    }

    randomNum = Math.floor((Math.random() * 101) + 18);
    $("#randomNum").text(randomNum);
    champagneWine = Math.floor((Math.random() * 11) + 1);
    redWine = Math.floor((Math.random() * 11) + 1);
    whiteWine = Math.floor((Math.random() * 11) + 1);
    roseWine = Math.floor((Math.random() * 11) + 1);
    score = 0;

    //Testing
    //------------------------------------------------------------------------------------------
    console.log(randomNum);
    console.log(champagneWine);
    console.log(redWine);
    console.log(whiteWine);
    console.log(roseWine);


    function ifElse() {
        if (score === randomNum) {
            winCount++;
            $("#winCount").text(+ winCount);
            alert("You Won - Cheers!")
            reset();
        }else if (score > randomNum) {
            lossCount++;
            $("#lossCount").text(+ lossCount);
            alert("You Lose - Try another glass!")
            reset();
        }
    }

    $("#champagne").on("click", function () {
        score = champagneWine + score;
        $("#score").text(+ score)
        ifElse ();
        console.log("champagne");
    })

    $("#red").on("click", function () {
        score = redWine + score;
        $("#score").text(+ score)
        ifElse ();
        console.log("red");
    })

    $("#white").on("click", function () {
        score = whiteWine + score;
        $("#score").text(+ score)
        ifElse ();
        console.log("white");
    })

    $("#rose").on("click", function () {
        score = roseWine + score;
        $("#score").text( + score)
        ifElse ();
        console.log("rose");
    })

});
