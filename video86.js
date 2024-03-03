// ***** DOM ***** //
// getElementById  Idبنستخدمها لما اعوز انادي علي ال 
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);// كدا انا وصلت للعنصر 

// getElementsByTagName =>paragraph دي بتستدعي ال 
let myTagElements = document.getElementsByTagName("p");
console.log(myTagElements);
console.log(myTagElements[1]);//وانا عاوز واحد معين paragبنعمل كدا لو في كذا 
myTagElements[1].innerHTML = "Test"; // =>p كدا غيرت الا جوا ال 

let myClassElements = document.getElementsByClassName("my-span");
console.log(myClassElements);
// querySelector =>وغيره tag او class  او Id بتستخدم اي حاجه 
let myQueryElement = document.querySelector(".special");// Class
console.log(myQueryElement);
// Id
let myQueryElement2 = document.querySelector("#my-div");
console.log(myQueryElement2);

//querySelector دي بتجيب عنصر واحد بس لو فيه كذا عنصر وهو الاول 

// querySelectorAll => دي بتجيبهم كلهم بقاا 
let myQueryAllElement = document.querySelectorAll(".my-span");// Class
console.log(myQueryAllElement);
//span كداا هيجيب الاتنين ال  

console.log(document.title);// page title
console.log(document.body);// كله بتاع الصفحه body هيجيب ال 
console.log(document.forms[0].one.value);// كدا هيجيب الا جوا القيمه 
// الاولي ودخلت علي الا جوهاا كماانform  كدا قولتله خش في ال 
console.log(document.links[1].href);// href كدا هتجيب الا جوا ال 
console.log(document.links[1]);// href كدا مش هتجيب الا جوا ال 