var cards = require("./BasicCard")
var inquirer = require("inquirer")

var ClozeCard = function(statement, cloze, partStatement) {
    this.statement = statement;
    this.cloze = cloze;


    this.partStatement = function() {
        var cloze = this.statement.replace(this.cloze, "..........");

        return cloze;
    }

    this.printCardInfo = function() {
        var printCard = "Front: " + this.statement + "\nBack: " + this.partStatement + "\nCloze: " + this.cloze + "\r\n";

        fs.appendFile('clozeCardLog.json', JSON.stringify(this), (err) => {
            if (err) {

                console.log(err);
            }
        });
    }
}

function createClozeCard() {
    inquirer.prompt([{
        name: "statement",
        message: "Enter the the statement for the Cloze Card:"
    }, {
        name: "cloze",
        message: "Enter the CLOZE portion of the statement: "
    }, {
        type: "confirm",
        message: "Do you want to create another Cloze Card?",
        name: "continue",
        default: true
    }]).then(function(answers) {
        var newCard = new ClozeCard(answers.statement, answers.cloze);
        newCard.printCardInfo();
        if (answers.continue === true) {
            createClozeCard()
        } else {
            console.log("see clozeCardLog.json for new flashcards!");
        }
    }); // body...
};
createClozeCard();


//     // this.clozeStatement = "[president_name] was the [president_number] president of the United States";

//     var president_names = [];
//     var president_number = [];
//     var loop = 0;

//     var getPresident = function(loop) {
//         console.log(loop);
//         console.log(president_name);

//         if (loop < 2) {
//             inquirer.prompt({
//                 name: "president_name",
//                 message: "Enter a Presidents Name: "
//             }).then(function(answers) {
//                 president_names.push(anwers.president_name);
//                 loop++
//                 getPresident();
//             });
//         }
//         getPresident();
//     }
// }


// function ClozeCard(text, cloze) {
//     this.cloze = cloze;
//     this.text = text;
//     this.displayCardInfo = function() {
//         console.log("Cloze: " + this.cloze + " " + "Text: " + this.cardText);
//     }

//     this.writeCardInfo = function() {
//         var writeCard = this.cardWhole + "\r\n";

//         fs.appendFile("cloze.txt", writeCard);
//     }

//     this.displayClozeDeleted = function() {
//         var cloze = this.cardWhole.replace(this.cardCloze, "...");
//         return cloze;
//     }
// };

// function createCard() {
//     inquirer.prompt([{
//         name: "cloze",
//         message: "Enter the cloze part of the flashcard: "
//     }, {
//         name: "text",
//         message: "Enter the whole text of the flashcard: "
//     }, {
//         type: "confirm",
//         message: "Display cloze deleted flashcard?",
//         name: "display",
//         default: true
//     }, {
//         type: "confirm",
//         message: "Do you wish to add another cloze flashcard?",
//         name: "continue",
//         default: true
//     }]).then(function(answers) {
//         var card = new ClozeFlashCard(answers.text, answers.cloze);
//         card.writeCardInfo();

//         if (answers.display === true)
//             console.log(card.displayClozeDeleted());

//         if (answers.continue === true)
//             createCard();
//         else
//             console.log("Please see cloze.txt for your newly created flashcards.")
//     });
// }

// createCard();
// //##########################################################
// var fs = require('fs');
// var inquirer = require('inquirer');
// var request = require('request');
// //##########################################################
// //GLOBAL VARIABLES
// var name;
// var nodeArg;
// var emptyArray = []
//     //##########################################################
//     //FUNCTIONS I WANT

// startGame();

// function greeting(name) {
//     console.log("------------------------");
//     console.log("------------------------");
//     console.log("Name:  " + name);
// }

// function startGame() {
//     console.log("------------------------");
//     inquirer.prompt([{
//         type: "confirm",
//         message: "Do You Want to Play Cloze Card Game?",
//         name: "confirm"
//     }, {
//         type: "input",
//         message: "What is your name?",
//         name: "name"
//     }]).then(function(answer) {
//         greeting(answer.name)
//         if (answer.confirm) {
//             createFlashCard();
//         } else {
//             console.log("Then Dont Play!")
//         }
//     });
// };

// //##########################################################
// //creating a constructor function for the 2 arguments question and answer
// function createFlashCard() {
//     inquirer.prompt([{
//         type: 'confirm',
//         message: "Do you want to create a new flashcard?",
//         name: "makeAFlashCard"
//     }]).then(function(answer) {
//             if (answer.makeAFlashCard) {
//                 inquirer.prompt([{
//                     type: "input",
//                     message: "Write a statement",
//                     name: "question"
//                 }, 

//                 {
//                     type: "input",
//                     message: "Choose a Cloze",
//                     name: "cloze"
//                 }


//                 ]).then(function(answer) {
//                     var newCard = new clozeCard(answer.question, answer.answer, cloze.answer);
//                     console.log(newCard);
//                     emptyArray.push(newCard);
//                     createFlashCard();
//                 })
//             } else {
//                 inquirer.prompt([{
//                     type: 'confirm',
//                     message: "Do you want to play the card game?",
//                     name: "cardGameConfirm"
//                 }]).then(function(answer) {
//                     if (answer.cardGameConfirm) {
//                         playGame()
//                     }
//                 })
//             }
//         });
//     };

//     function playGame() {
//         console.log("We are going to start playing the game");
//     //    inquirer.prompt([{
//     //     type: 'confirm',
//     //     message: "Do you want to create a new flashcard?",
//     //     name: "makeAFlashCard"
//     //     // body...

var clozeCard = function(text, cloze, partText) {
    this.text = text;
    this.cloze = cloze;
    // this.partText = 
    // this.clozeSelection = clozeSelection;
    //     //refered to w3 schools
    var newStatement = statement.replace(cloze, "_____________");

    function partialText(cloze) {
        // body...
    }


    function seeFrontOfCard() {
        console.log(this.text)
    }

    function seeBackOfCard() {
        console.log(this.cloze);


    }
}




// console.log(flashcard)