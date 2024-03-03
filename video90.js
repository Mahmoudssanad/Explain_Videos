// practice creat Element
for(let i = 0;i<100;i++){
let myElement = document.createElement("div");
let myH3 = document.createElement("h3");
let myParag = document.createElement("p");
let myHText = document.createTextNode(`product H ${i+1}`);
let mypText = document.createTextNode(`product paragraph ${i+1}`);

myElement.className = "product";

// Add myparag Text
myH3.appendChild(myHText);

// Add myH3
myParag.appendChild(mypText);

// Add myH3 To myElement
myElement.appendChild(myH3);

// Add myparag To myElement
myElement.appendChild(myParag);

console.log(myElement);
}
// document.body.appendChild(myElement);