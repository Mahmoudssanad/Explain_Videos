// children=>html بتجيب العناصر الا موجوده في الاب بتاع ال 

let myElement = document.querySelector("div");
console.log(myElement);
console.log(myElement.children);// كدا بيجيب العنصر ذات نفسه 
console.log(myElement.children[0]);// كدا بتجيب الا جوا العنصر 

// childNodes =>text هيجيب كل حاجه جوا عنصر الاب كل حاجه
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

// frist child=> child بيجيب اول 
console.log(myElement.firstChild);// text عشان بيعتبر المسافات text  هو جاب 

// lastChild => child اخر 
console.log(myElement.lastChild);

// fristElementChild => مش هياخد التعليق HTML كدا هيجيب اول عنصر 
console.log(myElement.firstElementChild);

// lastElementChild =>بردك HTML هيجيب اخر عنصر 
console.log(myElement.lastElementChild);