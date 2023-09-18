"use strict";
const emailEl = document.getElementById("email");
const errorMsgSpanEL = document.getElementById("error-msg");
const sectionSubscribe = document.getElementById("subscribe");
const sectionSucess = document.getElementById("sucess");
const sucessEmailEl = document.querySelector(".sucess-email");

function removeError() {
  errorMsgSpanEL.classList.add("hide");
  emailEl.classList.remove("email-error");
  emailEl.value = "";
}

function thankYou() {
  const email = emailEl.value;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    removeError();

    sectionSubscribe.classList.add("hide");
    sectionSucess.classList.remove("hide");
    sucessEmailEl.innerHTML = email;
  } else {
    errorMsgSpanEL.classList.remove("hide");
    emailEl.classList.add("email-error");
  }
}

function dismiss() {
  sucessEmailEl.innerHTML = "";
  sectionSubscribe.classList.remove("hide");
  sectionSucess.classList.add("hide");
}
