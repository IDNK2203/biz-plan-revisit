
let nav = document.querySelector(".nav");
let menu__icon__open = document.querySelector(".menu-icon__open");
let menu__icon__close = document.querySelector(".menu-icon__close");
let menu__icons = document.querySelector(".menu-icons");
let body = document.querySelector("body");

console.log(nav);
// MENU TOGGLE FUNCTIONALITY
menu__icons.addEventListener("click", () => {
  menu__icon__close.classList.toggle("hidden");
  menu__icon__open.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  body.classList.toggle("lock");
});

// ACCORDION FUNCTIONALITY

let collaspe_icon = Array.from(
  document.querySelectorAll(".faqs-accordion__collaspe-icon")
);
let accordion__answers = Array.from(
  document.querySelectorAll(".faqs-accordion__answer")
);

let accordion__questions = Array.from(
  document.querySelectorAll(".faqs-accordion__question")
);
accordion__questions.forEach((question) => {
  let icon = question.children[1].children[0];
  let accordion_answer = question.nextElementSibling;
  let answer_attr = accordion_answer.dataset.number;

  question.addEventListener("click", () => {
    reset_accordion_item(answer_attr);
    accordion_answer.classList.toggle("collaspe");
    if (accordion_answer.classList.contains("collaspe")) {
      accordion_answer.style.height = accordion_answer.scrollHeight + "px";
      icon.classList.add("rotate_icon");
    } else {
      accordion_answer.style.height = "0px";
      icon.classList.remove("rotate_icon");
    }
  });
});

let reset_accordion_item = (answer_attr) => {
  // reset collasped answers
  accordion__answers.forEach((answer) => {
    if (answer.dataset.number != answer_attr) {
      answer.classList.remove("collaspe");
      answer.style.height = "0px";
    }
  });
  // reset icons
  collaspe_icon.forEach((icon_) => {
    icon_.firstElementChild.classList.remove("rotate_icon");
  });
};
// TAB FUNCTIONALITY

let tab_item = Array.from(document.querySelectorAll(".tab__item > *"));
let tab_content_item = Array.from(
  document.querySelectorAll(".tab__content-item")
);

tab_item.forEach((item_) => {
  item_.addEventListener("click", (e) => {
    hide_all();
    item_.classList.add("active");
    tab_content_item.forEach((item) => {
      if (`tab_${item_.parentElement.dataset.tab}` == item.id) {
        item.classList.remove("hide");
      }
    });
  });
});
let hide_all = () => {
  tab_content_item.forEach((item) => {
    item.classList.add("hide");
  });
  tab_item.forEach((item) => {
    item.classList.remove("active");
  });
};
