// DOM Manipulation

//const title = document.querySelector("#main-heading");
//title.style.color = "red";
//console.log(title);

const listItems = document.querySelectorAll(".list-items");
listItems.style.fontSize = "2rem";
for (i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "5rem";
}

console.log(listItems);

// GetElementById()
//const title = document.getElementById("main-heading");
//console.log(title);

//GetElementByClassName()
//const listItems = document.getElementsByClassName("list-items");
//console.log(listItems);

//GetElementByTagName()
//const listItems = document.getElementsByTagName("li");
//console.log(listItems);

//querySelector ()
//const container = document.querySelector("div");
//console.log(container);
