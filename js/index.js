//    toggle dropdown arrow while hover
const b = document.querySelector("#drop-1");
const a = document.querySelector("#drop1");


b.addEventListener("mouseenter", () => {
  if (a.classList.contains("fa-chevron-down")) {
    // If the "fa-chevron-down" class is present on hover, remove it and add "fa-angle-up"
    a.classList.remove("fa-chevron-down");
    a.classList.add("fa-angle-up");
  } else if (a.classList.contains("fa-angle-up")) {
    // If the "fa-angle-up" class is present on hover, remove it and add "fa-chevron-down"
    a.classList.remove("fa-angle-up");
    a.classList.add("fa-chevron-down");
  }
});

a.addEventListener("mouseleave", () => {
  if (a.classList.contains("fa-chevron-down")) {
    // If the "fa-chevron-down" class is present on mouseleave, remove it and add "fa-angle-up"
    a.classList.remove("fa-chevron-down");
    a.classList.add("fa-angle-up");
  } else if (a.classList.contains("fa-angle-up")) {
    // If the "fa-angle-up" class is present on mouseleave, remove it and add "fa-chevron-down"
    a.classList.remove("fa-angle-up");
    a.classList.add("fa-chevron-down");
  }
});


   
const c = document.querySelector("#drop-2");
const d = document.querySelector("#drop2");


c.addEventListener("mouseenter", () => {
  if (d.classList.contains("fa-chevron-down")) {
    // If the "fa-chevron-down" class is present on hover, remove it and add "fa-angle-up"
    d.classList.remove("fa-chevron-down");
    d.classList.add("fa-angle-up");
  } else if (d.classList.contains("fa-angle-up")) {
    // If the "fa-angle-up" class is present on hover, remove it and add "fa-chevron-down"
    d.classList.remove("fa-angle-up");
    d.classList.add("fa-chevron-down");
  }
});

d.addEventListener("mouseleave", () => {
  if (d.classList.contains("fa-chevron-down")) {
    // If the "fa-chevron-down" class is present on mouseleave, remove it and add "fa-angle-up"
    d.classList.remove("fa-chevron-down");
    d.classList.add("fa-angle-up");
  } else if (d.classList.contains("fa-angle-up")) {
    // If the "fa-angle-up" class is present on mouseleave, remove it and add "fa-chevron-down"
    d.classList.remove("fa-angle-up");
    d.classList.add("fa-chevron-down");
  }
});



// js for faq accordian
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}
