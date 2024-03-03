
//createElement => 
let myElement = document.createElement("div");// divلازم اعمل عنصر عشان اشتغل عليه وهنا ال 
// createAttribute=>  وعاوز اغيره في المستقبل attribut لو عاوز اضيف 
let myAtter = document.createAttribute("data-custom");//Attribute كدا عملت للعنصر 
let myText = document.createTextNode("product One");//دا النص الا هيتكتب جواه
let myComment = document.createComment("This Is Div");// جوا العنصر comment وكدا عملت 

myElement.className = "product";//class كدا انا ضيفت له 
//setAttributeNode=>ممكن اغيره في المستقبل  Attribute بتدي 
myElement.setAttributeNode(myAtter);
myElement.setAttribute("data-test","Testing");// Testing جواه data-test اسمه Attribute كدا انا عملت 

// Append Text To Element 
myElement.appendChild(myText);// الخطوه دي عشان احط النص جوا العنصر 
// Append comment To Element 
myElement.appendChild(myComment);//  في الاول هطلع السطر دا فوق comment  لو عاوز ال 
// Append Element To Body 
document.body.appendChild(myElement);

// console.log(myElement);