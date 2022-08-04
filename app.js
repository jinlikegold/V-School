// object
const book = {
    "name": "One Last Stop",
    "author": "Casey McQuiston",
    "date read": "July 2022"
};

// dot notation
const bookProp1 = book.name;
const bookProp2 = book.author;

// array
const bookList = ["One Last Stop", "Red White and Royal Blue"];

// calling array with bracket notation
const firstBook = bookList[0]; 

// conditional statement

if (firstBook === "One Last Stop") {
    console.log(firstBook);
} else if (bookProp2 !== "Casey McQuiston") {
    console.log("That was weird.")
} else {
    console.log("I don't read books.")
}

// for loop

for (let cat = 1; cat < 10; cat++) {
    console.log(cat)
}

// the following code makes the ghost "turn the light off" upon being clicked

function ghostDisappear () {
    document.body.style.backgroundColor = "black"
}

const ghost = document.getElementById("ghost")

ghost.addEventListener("click", ghostDisappear)
