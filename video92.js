// ***** Events ***** // 

// onclick =>function  لما انا اضغط عليه هينفذ الا انا كاتبه مثلا هنا هينفذ => click شمال 

let myBtn = document.getElementById("btnn");

myBtn.onclick = function () {
    console.log("Clickedd");
};

// oncontextmenu =>  يمين هيححق الشرط الا انا كاتبه click اول ما اضغط 
myBtn.oncontextmenu = function () {
    console.log("Clicked");
};

// onmouseenter =>الا انا عامله action  اول ما المس بالموس تعمل ال 
myBtn.onmouseenter = function () {
    console.log("Clicks");
};

// onmouseleave =>معينه action  ان انا لو حطيت الموس وشيلته هينفذ 
myBtn.onmouseleave = function () {
    console.log("Clickt");
};

// onscroll =>معينه action  بينفذ scroll كل ما اعمل 
window.onscroll = function () {
    console.log("Scroll");
};

// onresize => الا هو مقاس الصفحه بغير فيها يعني زي الحجم كداا 
window.onresize = function () {
    console.log("Resize");
};

// onfocus => معينه action الا انا بكتب فيها لما ادخل واخرج هينفذ form البتاعه بتاع ال 
window.onfocus = function () {
    console.log("onfocus");
};

// onsubmit => هينفذ actionمعينه  submit لو ضغطت علي زرار ال 
window.onsubmit = function () {
    console.log("onsubmit");
};

// onblur => form نفس بتاع ال 
window.onblur = function () {
    console.log("onsubmit");
};