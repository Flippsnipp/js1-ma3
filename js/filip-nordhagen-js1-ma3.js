/* 
    JavaScript 1 - Module Assignment 3
*/

// Question 1

const arrowFunction = (a, b) => {
    return a - b;
};

// Question 2

const gamesUrl = "https://api.rawg.io/api/games?genres=sports";

fetch (gamesUrl)
    .then(function(response){
        return (response.json());
    })
    .then(function(json) {
        displayingGameNames(json);
    }) 
    .catch(function(error) {
        window.location.replace("./error.html");
    });

    function displayingGameNames(json) {
        const games = json.results;

        for(let i = 0; i < games.length; i++) {
            console.log(json.results[i].name);
        }
    }

// Question 3

var funnyStatement = "these cats are outrageous.";

var replacementAnimal = funnyStatement.replace("cats", "giraffes");

console.log(replacementAnimal);

/* 
    Commenting Question 4 out so I can run the code for the remainding questions

// Question 4

const newURL = ("https://my.site.com?userId=7");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

let userId; 

if (params.has(userId)) {
    userId = params.get("userId");
} else {
    document.location.href = "./third.html"; 
}

if (params.has(userId < 10)) {
    userId = params.get("userId");
} else {
    document.location.href = "./first.html";
}

if (params.has(userId >= 10)) {
    userId = params.get("userId");
} else {
    document.location.href = "./second.html";
}
*/

// Question 5

function removeButton(details) {
    console.dir(details);

    const container = document.querySelector(".container");
    const button = document.querySelector(".btn");
    container.removeChild(button); 
}

removeButton();

// Question 6 

const bloddyZoo = document.querySelector(".animals");
const bloddyCows = document.querySelector(".cows")
const bloddyBirds = document.createElement("li");

bloddyBirds.className = "parrots";

const bloddyBirdsText = document.createTextNode("Parrots");

bloddyBirds.appendChild(bloddyBirdsText);

bloddyZoo.appendChild(bloddyBirds);

bloddyCows.after(bloddyBirds);

// Question 7

const gamesUrl1 = "https://api.rawg.io/api/games/3801";

fetch(gamesUrl1)
    .then(function(response){
        return (response.json());
    })
    .then(function(json){
        document.querySelector(".rating").innerText = json.rating
    })
    .catch(function(error){
        console.log(error);
    });

