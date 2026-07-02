let age = 20;
var course = "BBIT";
const university = "Strathmore";

//Redeclare
//let age = 40;
var course = "BBIT";
//const university = "Strathmore";

//Redeclare
//let age = 40;

//Redeclare
var course = "ICS";

//Re-assign
age = 40;
course = "ICS";

let time; // declared outside the block

if(true){
    time = "11:30";
    var day = "4th";
    //const year = 2026;
}

console.log(time);

//scope (const , let-block) var ,global

// function definition

/**
 * A function that calculates the area of a rectangle
 * @param {int} height
 * @param {int} width
 * @returns {int} area
 */

function calculateArea(height, width){

    if(height == null){
        console.log('height missing!');
    }else if(width == null){
        console.log('width missing!');
    }else{
        let area = height * width;
        return area;
    }

   //console.log("function calculateArea")
   //alert("Function called/executed");
}

//return a value is NOT printing out
// execution - called

console.log(calculateArea(20,3)); //one output 60
console.log(calculateArea(20));   //one output width missing
console.log(calculateArea());     //height missing

//function expression
const add = function(number_1, number_2){
    return number_1 + number_2;
}

console.log(add(4,2));

//arrow functions
const multiply = (x,y) => x * y;

console.log(multiply(2,5));

/** Javascript Arrays (related) */
const scores = [45,56,67,67,78];

//access array_name[index]

//78
console.log(scores[4]);

//67
console.log(scores[2]);

//45
console.log(scores[0]);

//56
console.log(scores[1]);

let student_names = ["omondi","wafula","kiprotich","nyambane","toipan"];

//print out kiprotich on the console window
console.log(student_names[2]);

let governors = [
  [47,"Jonson Sakaja"],
  [1,"Abdullswamad Sherrif"],
  [21,"Irungu Kang'ata"]
];

//The governor of county number 1 is Abdullswamad Sherrif
console.log(
    "The governor of county number",
    governors[1][0],
    "is",
    governors[1][1]
);

//map (perform an operation on each element)
let doubled = scores.map(x => x * 2); //multiply each score by 2
console.log(doubled);

//properties
//The class has j students (student_names )
console.log("The class has", student_names.length, "students");

//Kenya has b governors
console.log("Kenya has", governors.length, "governors");

//for
for(let index in scores){
    console.log(scores[index]);
}

for(let score of scores){
    console.log(score);
}

//for each
scores.forEach(function(score){
    console.log("score:", score);
});

const student = {
    name: "Alice",
    age: 20,
    passed: true,
    grade: 'A',
    "admission number": 183380,
    course: "BBIT",
    group: "2A",
    attendance: 20,

    addAttendance: function(){
        this.attendance += 1;
        //this.attendance + 1;
    }
};

//accessing items

//student name
console.log(
    'My name is',
    student.name,
    "from",
    student["admission number"],
    "university"
);

//a method in the object
student.addAttendance(); //add attendance by 1
console.log(student.attendance); //21

//array of objectsf an object as an array

let bbit_2b_students = [
    {adm:223251, name:"Blessing"},
    {adm:192977, name:"Ryan"},
    {adm:222024, name:"Ambrose"},
    {adm:220941, name:"Neema"}
];

//print out the names of all students in bbit 2b using a loop
bbit_2b_students.forEach(function(student){
    console.log(student.name);
}); 

//@TODO :Show looping of objects
//getting the keys of an object as an array

console.log(Object.keys(student));
//getting the keys of an object as an array
console.log(Object.values(student));

//getting both keys and values of an object as an array
console.log(Object.entries(student));

// DOM-Document Object Model
console.log(document);
console.log(document);

//Elements on our page(variables)
const heading = document.querySelector("#mainHeading");
console.log(heading);

const previewImage = document.querySelector("img");
console.log(previewImage);

const aboutSection = document.getElementById("about");
console.log(aboutSection);

//all the sections 
const allSections = document.querySelectorAll("section");
console.log(allSections);

const allNavLinks = document.querySelectorAll("nav a");
console.log(allNavLinks);

// FIXED TYPO ONLY
let aboutParagraph = document.querySelector("#about p");

//change its text
aboutParagraph.textContent = "This text was changed!";
aboutParagraph.style.colour = "red";

//setting/setter - updating the page from js
//via the DOM
previewImage.setAttribute("title" , "New Title of Image ");
previewImage.setAttribute("alt" , "New alternate text for the image ");
console.log(previewImage.alt);
console.log(previewImage.title);

//Event Handling - Event(user events - click , key events ,scroll)

//get the element of interest - button with an id of changeTextBtn
let changeTextBtn = document.querySelector("#changeTextBtn") ;
let demoText = document.querySelector("#demoText");

//we are handling the click event for the button with an id of changeTextBtn
changeTextBtn.addEventListener("click",function(event){
    console.log("someone clicked me ");
    demoText.textContent = "I have been changed when you clicked";
    demoText.style.color = "orange";
    demoText.style.frontSize = "16PX";
});
// use case 2
let highlightSectionsBtn = document.querySelector("#highlightSectionsBtn");
highlightSectionsBtn.addEventListener("click" ,function(event){
    //one
    document.querySelector("#about").classList.toggle("section-highlight");
    //highlight all sections
    //document.querySelectorAll("section").classList.toggle("section-highlight");

    document.querySelectorAll("section").forEach(function(section){
        section.classList.toggle("section-highlight");
    });

});
// get the textbox with id nameInput
document.querySelector("#nameInput").addEventListener("input" ,function(event){
    document.querySelector("#nameOutput").textContent = 
    "Hello" +document.querySelector("#nameInput").value + "!";

});
// Case 4 - Character Counter
let gtaCommentText = document.querySelector("#commentInput");
let charCountParagraph = document.querySelector("#charCount");

gtaCommentText.addEventListener("input", function(e) {

    // Count the number of characters
    let numberOfChars = gtaCommentText.value.length;

    // Update the paragraph
    charCountParagraph.textContent = "Characters: " + numberOfChars;

    // Prevent the user from typing after 60 characters
    if (numberOfChars > 60) {
        gtaCommentText.value = gtaCommentText.value.substring(0, 60);
        charCountParagraph.textContent = "Characters: 60";
    }
});


// Case 5 - Keyboard Events
let keyOutputParagraph = document.querySelector("#keyOutput");

// When a key is pressed anywhere on the page
document.addEventListener("keydown", function(event) {

    // Display the key that was pressed
    keyOutputParagraph.textContent = "You pressed: " + event.key;

});
//case 6 -todo list,wish list
let wishListInput = document.querySelector("#wishListInput");
let wishListButton = document.querySelector("#wishListForm button");
//<ul> </ul>
let wishListItems = document.querySelector("#wishListItems");

wishListButton.addEventListener("click" ,function(event){
    //prevent the form from being submitted
    event.preventDefault();

    //read whatever is in th e wishListInput
    let wishListInputValue = wishListInput.value;

    //update the list if the wishListInputValue
    //what is the difference between != "" and null

    if(wishListInputValue != ""){
        //console.log(wishListInputValue);
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = "Delete";
        li.textContent = wishListInputValue;

        // we are going to add an event listener with the new dynamic element
    button.addEventListener("click", event => {
        li.Object.remove();
    });

        li.appendChild(button);
        //we append the list to the UL
        wishListItems.appendChild(li);

        //finally we clear what the user typed in the input field
        wishListInput.value = "";
    }
});

//case 6b - removing items from the wish list
let deleteButtons = document.querySelectorAll("#wishListItems button");
console.log(deleteButtons);

//iterate a.k.a loop through the buttons
deleteButtons.forEach(button => {
    button.addEventListener("click", event => {
      // console.log("Delete button clicked");
      //how do we get the first list item in an unordered list
      //given that the ul has an id of #wishListItems

      //#wishListItems li
      //#wishListItems>li
      //#wishListItems li:first

      //querySelector  - returns the fisrt matching element
      // let first_li = document.querySelector("#wishListItems li");//first one
      // first_li.remove();
      // for one or many
      //<li> <button>Delete</button> </li>
      //@TODO , how do you use parent, parentElement

      button.closest("li").remove();
      //button.parentElement.remove();

    });
});

// case 7 - submit form / validation
// show what someone filled in the form
let submitButton = document.querySelector("#feedbackForm button");
let feedbackForm = document.querySelector("#feedbackForm");
let feedbackOutput = document.querySelector("#feedbackOutput");//div

feedbackForm.addEventListener("submit", event => {
    // prevent the form from being submitted normally
    event.preventDefault();
    //console.log(" submit button cliked");

    //get the values filled in the form 
    const name = document.querySelector("#fanName");//name
    const email = document.querySelector("#fanEmail");//email
    const message = document.querySelector("#fanMessage");//message, textarea

    feedbackOutput.innerHTML = 
    "<strong> Fan Feedback </strong> <br>" +
    "<p> Name: " + name + "</p>" +
    "<p> Email: " + email + "</p>" +
    "<p> Message: " + message + "</p>"
    ;

    //clear the form fields
    name.value = "";
    email.value = "";
    message.value = ""; 
    // add success styles to the ouptput div
    feedbackOutput.classList.add("success-text");

});

// forgotten
letResetBtn = document.querySelector("#resetButton");
resetBtn.addEventListener("click", event => {
    //undo the changed text
    demoText.textContent = 
    "click the button to modify this text using javascript.";
    demoText.style.color = "white";
    demoText.style.fontSize = "16px"; // has no effect

    //undo the highlight of the sections
    // toogle will remove if present or add if absent
     document.querySelectorAll("section").forEach(function(section){
        // section.classList.remove("section-highlight");
        section.classList.toggle("section-highlight");
    });

});