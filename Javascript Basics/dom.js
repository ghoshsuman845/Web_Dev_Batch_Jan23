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

