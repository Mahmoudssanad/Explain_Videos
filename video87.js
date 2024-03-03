
let myElement = document.querySelector(".js");
console.log(myElement.innerHTML);
//innerHTML =>class الا جوا ال HTML بيجيب اي 
console.log(myElement.textContent);
//textContent => HTML دا بيجيب الكلام بس ملوش دعوه ب اي 
console.log(myElement);

myElement.innerHTML = "Text From <span>video87.js</span> File";// كداا غيره
myElement.textContent = "Text From <span>video87.js</span> File";
// هنا اقصد اول صوره يعني 
document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "picture";
document.images[0].id = "pic";// كل الا مش موجود بيتضاف
document.images[0].className = "img";
// كل حاجه انا عملتها بتضاف علي الصوره

let myLink = document.querySelector(".link");// بتاعي classكدا انا بستدعي اسم 
console.log(myLink);
//getAttribute => لو انا كتبت اي حاجه هيجيبلي الا جوها 
// هيجيب الا جوهاا وغيررررهclass يعني مثلا كتبت 
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

//setAttribute=> لو انا عاوز اغير الا جوا الحاجه 
myLink.setAttribute("href","https://twitter.com");
myLink.setAttribute("title","twitter");
//مش موجود وانا كتبته بيتضاف عادي  Attribute لو فيه 