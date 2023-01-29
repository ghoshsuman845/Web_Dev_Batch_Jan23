// 1. selecting elements in document

// getElementById(): gets element with the id that you pass as parameter
let title = document.getElementById("title");
title.innerText = " Changing DOM"
console.log(title.innerText);


// querySelector() : gets the first element with the specified selector
let title1 = document.querySelector("#title")
title1.innerText = "List Item 1";
title1.style.border = "1px solid black"
console.log(title1);

// querySelectorAll(): gets all the elements with the specified selector

let listItem = document.querySelectorAll("ul > li")
console.log(listItem);
for (let i = 0; i < listItem.length; i++){
    listItem[i].innerText = "Item"
    console.log(listItem[i]);
}

// 2. adding new elements to document
// createElement() : to add new elements to the DOM tree
let divEle = document.getElementsByTagName("div")[1]
console.log(divEle);
let orderedList = document.createElement("ol");
console.log(orderedList);
let li1 = document.createElement("li");
li1.textContent = "Todo 1";
let li2 = document.createElement("li");
li2.textContent = "Todo 2";
orderedList.appendChild(li1);
orderedList.appendChild(li2);

divEle.appendChild(orderedList)

// 3. removing element from DOM
// divEle.remove()


// DOM Events
let clickBtn = document.getElementById("clickBtn");
console.log(clickBtn);
// element.addEventListener(eventName, function)
clickBtn.addEventListener("click", function callEventListener(){
    console.log("You clicked the call event listener button");
});

function printHello() {
    console.log("Hello");
}

// Using eventListeners

// addEventListener() : this method attaches an event handler to the specified element
// element.addEventListener(event, function, useCapture)

let heading = document.createElement("h1");
heading.innerText = "Counter App"

let incBtn = document.createElement("button");
incBtn.innerText = "+1";

incBtn.addEventListener("click", incrementCounter)

let decBtn = document.createElement("button");
decBtn.innerText = "-1";

decBtn.addEventListener("click", decrementCounter);

let count = document.createElement("h2")

divEle.appendChild(heading)
divEle.appendChild(count)
divEle.appendChild(incBtn)
divEle.appendChild(decBtn)


let counter = 0;
count.innerText = counter;
function incrementCounter() {
    ++counter;
    count.innerText = counter;
}

function decrementCounter() {
    --counter;
    count.innerText = counter;
}


