// console.log("BasicCard.js")
var inquirer = require("inquirer")
var fs = require("fs")
function BasicCard(front, back) {

this.front = front;
this.back = back;
}

    this.displaycardContent = function() {
        console.log("Front: " + this.question + " " + "Back: " + this.answer);
    }

    this.printCardInfo = function() {
        var printCard = "Front: " + this.question + ", Back: " + this.answer + "\n";
    }


        fs.appendFile('basicCardLog.json', JSON.stringify(this), (err) =>{
        if(err) {
     
            console.log(err);
    };
});
}



function createBasicCard() {
    inquirer.prompt([


     {
        name: "question",
        message: "Enter Question of Basic Flash Card: "
    }, {
        name: "answer",
        message: "Enter Answer of Basic Flash Card:  "

    }, {
        type: "confirm",
        message: "Do you want to create another Card?",
        name: "continue",
        default: true
       


    }]).then(function(answer) {
        var newCard = new BasicCard(answer.question, answer.answer);
        newCard.printCardInfo();
        if (answer.continue === true){
            createBasicCard()
        }
        else{
            console.log("see basicCardLog.json for new flashcards!")
         
        }


    });
}

createBasicCard();
// var flashcard = new BasicCard("ricardo", 26);
// console.log(flashcard.front)


module.exports = BasicCard;

