// Element.attributes => الا موجوده في العنصر بتاعي attributes بيجيب قايمه بجميع ال 
//attributes => وغيررهclass , id ,tag 
console.log(document.getElementsByTagName("p")[0].attributes);

// Element.hasAttribute => موجوده في العنصر بتاعي ولا لا Attribute بيعمل بحث علي 
// بترجع صح وغلط
//s خلي بالك ان دي من غير حرف ال 
let myP = document.getElementsByTagName("p")[0];
if(myP.hasAttribute("data-src")){// موجود ولا لا data-src ال attripute علي ان checkيعني هو ب 
    if(myP.getAttribute("data-src") ===""){
        myP.removeAttribute("data-src");
    }else{
        myP.setAttribute("data-src","New Value");// New Value كدا هيكتبلي مكانه 
    }
    // myP.removeAttribute("data-src");// بيقوله يعني لو لقيته احذفه
}else{
    console.log("Not Found");
}
//Element.removeAttribute=> بتحذف

// Element.hasAttributes=>لو فيه هترجع صح لو مفيش هترجع غلطAttributes علي ال check بترجع صح وغلط وبتعمل 
if(myP.hasAttributes()){
    console.log(`has attributes`);
}

if(document.getElementsByTagName("div")[0].hasAttributes()){//Attributes مفهاش 
    console.log("Has Attributes");
}else{
    console.log("Div not has Attriputes");
}
