
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

// contact form
// hooks
let trial_form = document.querySelector(".contact-us-form");
let trial_form_input = Array.from(
  document.querySelectorAll(".contact-us-form__input")
);
let err_msg = Array.from(
  document.querySelectorAll(".contact-us-form__err-msg")
);

let textarea = document.querySelector(".contact-us-form__input--textarea");

console.log(trial_form, trial_form_input, err_msg ,textarea);

textarea.value = "";
trial_form.addEventListener("submit", (e) => {
  trial_form_input.forEach((input) => {
    if (!input.validity.valid) {
      e.preventDefault();
      check_input_validity(input);
    }
  });
});

let check_input_validity = (field) => {
  let validity_value = field.validity.valid;
  let err_msg = field.parentElement.children[3];
  if (field.validity.valueMissing) {
    err_msg.textContent = `The field ${field.name} hasn't been filled yet`;
  } else if (field.validity.tooShort) {
    err_msg.textContent = `The feild ${field.name} should have at least ${field.minLength} characters; you have entered ${field.value.length}`;
  } else if (field.validity.typeMismatch) {
    err_msg.textContent = `The value entered in this field needs to be a ${field.type}`;
  } else if (field.validity.patternMismatch) {
    err_msg.textContent =
      "the set password value is not consistent with check password value";
  }

  function display_err(value) {
    if (!value) {
      err_msg.style.display = "block";
    } else {
      err_msg.style.display = "none";
    }
  }
  display_err(validity_value);
};

trial_form_input.forEach((input) => {
  input.addEventListener("input", () => {
    check_input_validity(input);
  });
});
