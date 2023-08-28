// navbar 
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if(bar) {
    bar.addEventListener("click", ()=> {
        nav.classList.add("active");
    });
};

if(close) {
    close.addEventListener("click", ()=> {
        nav.classList.remove("active");
    });
};







// start single product page

const mainImg = document.getElementById("main-img");
const smallImg = document.querySelectorAll(".small-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        mainImg.src = smallImg[i].src;
    };
};

// end single product page