  //Define character properties
  
  let character = {
    name: "",
    age: "",
    playerName: "",
    class: "",
    race: ""
  };

  var summary = document.querySelector('.info_summary');


let race = document.getElementById("race");
let playerClass = document.getElementById("class");

function update() {

    character.name = document.getElementById("name").value;
    character.age = document.getElementById("age").value;
    character.playerName = document.getElementById("playerName").value;
    character.class = document.getElementById("race").value;
    character.race = document.getElementById("class").value;


    summary.setAttribute('style', 'white-space: pre;');
    summary.textContent = "Player Name: " + character.playerName + "\r\n"
    summary.textContent += "Name: " + character.name + "\r\n"
    summary.textContent += "Age: " + character.age + "\r\n"
    summary.textContent += "Race: " + character.race + "\r\n"
    summary.textContent += "Class: " + character.class + "\r\n";

    if (stats[0] !=="") {
        summary.textContent += "Str: " + stats[0] + "       Dex: " + stats[1] + "\r\n"
    summary.textContent += "Con: " + stats[2] + "       Int: " + stats[3] + "\r\n"
    summary.textContent += "Wis: " + stats[4] + "       Cha: " + stats[5];
    }

    //Add summary card that is fixed during scroll

};

// playerClass.addEventListener('change', function (event) {
//     event.preventDefault();
//     typeface = typefaceEl.value;
//     document.querySelector('.container').style.fontFamily = typeface;
//   });

//   typefaceEl.addEventListener('change', function (event) {
//     event.preventDefault();
//     typeface = typefaceEl.value;
//     document.querySelector('.container').style.fontFamily = typeface;
//   });

// var playerNameInput = document.querySelector('#playername');
// var nameInput = document.querySelector('#name');
// var ageInput = document.querySelector('#age');
// var summary = document.querySelector('#info_summary')
//     summary.textContent = `Player Name: ${character.playerName}/nName: ${character.name}/nAge: ${character.age}`;
// }

// document.getElementById("name")

// playerNameInput.addEventListener('keydown', function (event) {
//     summary.textContent = `Player Name: ${character.playerName}/nName: ${character.name}/nAge: ${character.age}`;
// })

// nameInput.addEventListener('keydown', function (event) {
//     summary.textContent = `Player Name: ${character.playerName}/nName: ${character.name}/nAge: ${character.age}`;
// })

// ageInput.addEventListener('keydown', function (event) {
//     summary.textContent = `Player Name: ${character.playerName}/nName: ${character.name}/nAge: ${character.age}`;
// })

let statbuttons = document.querySelectorAll(".statbutton")

for (var i = 0; i < statbuttons.length; i++) {
    statbuttons[i].setAttribute("style", "display:none;");
  }

var stats = [];
//wis, cha, dex, str, con, int

function generateStats() {
    let statblocks = document.querySelectorAll("h4");
    for (let i = 0; i<statblocks.length; i++) {
        statblocks[i].textContent ="";
    }

    if(document.getElementById("classic").checked=true) {
        classicGenerate();
    
    } else if (document.getElementById("standard").checked=true) {
        standardGenerate();
    
    } else {
        pointBuy();
}
// add checkbox to re-roll 1s
}


function standardGenerate() {
    for (var i = 0; i < 6; i++) {
        // 
        var x = [0,0,0,0]
        for (var j = 0; j < 4; j++) {

            x[j] = Math.floor((Math.random()*6)+1);
    }
    x.sort(function(a, b) {
        return a - b;
      });
    x.reverse();
    x.pop();
    var sum = x[0] + x[1] + x[2];

        stats[i] = sum;

    }
    console.log(stats);
    let statblocks = document.querySelectorAll("h4");
    console.log(statblocks);
    

        statblocks[i].textContent +=stats[i];

    }



function classicGenerate() {
    for (var i = 0; i < 6; i++) {
        // 
        var x = [0,0,0,0]
        for (var j = 0; j < 3; j++) {

            x[j] = Math.floor((Math.random()*6)+1);
    }

    var sum = x[0] + x[1] + x[2];

        stats[i] = sum;
        console.log(stats);
    let statblocks = document.querySelectorAll("h4");
    console.log(statblocks);

        statblocks[i].textContent +=stats[i];


}}
    //let wis, cha, dex, str, con, int = Math.random()*6

  