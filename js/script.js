"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") closeModal();
});

// modal webcam

const modalWebcam = document.querySelector(".modal-webcam");
const btnCloseModalWebcam = document.querySelector(".close-modal-webcam");
const btnOpenModalWebcam = document.querySelectorAll(".show-modal-webcam");

const openModalWebcam = function () {
  modalWebcam.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModalWebcam = function () {
  modalWebcam.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModalWebcam.length; i++) {
  btnOpenModalWebcam[i].addEventListener("click", openModalWebcam);
}

btnCloseModalWebcam.addEventListener("click", closeModalWebcam);
overlay.addEventListener("click", closeModalWebcam);

document.addEventListener("keydown", function (e) {
  if (!modalWebcam.classList.contains("hidden") && e.key === "Escape")
    closeModalWebcam();
});

// slider

$(function () {
  var flag = 0;
  $(".next").click(function () {
    if (flag == 0) {
      $(".c1").css({
        transform: "translateX(-200px) scale(1)",
        "z-index": "9",
      });
      $(".c2").css({ transform: "translateX(200px) scale(1)", "z-index": "9" });
      $(".c3").css({ transform: "translateX(0) scale(1.5)", "z-index": "99" });
      flag = 1;
    } else if (flag == 1) {
      $(".c3").css({
        transform: "translateX(-200px) scale(1)",
        "z-index": "9",
      });
      $(".c1").css({ transform: "translateX(200px) scale(1)", "z-index": "9" });
      $(".c2").css({ transform: "translateX(0) scale(1.5)", "z-index": "99" });
      flag = 2;
    } else if (flag == 2) {
      $(".c2").css({
        transform: "translateX(-200px) scale(1)",
        "z-index": "9",
      });
      $(".c3").css({ transform: "translateX(200px) scale(1)", "z-index": "9" });
      $(".c1").css({ transform: "translateX(0) scale(1.5)", "z-index": "99" });
      flag = 0;
    }
  });
  $(".prev").click(function () {
    if (flag == 0) {
      $(".c3").css({
        transform: "translateX(-200px) scale(1)",
        "z-index": "9",
      });
      $(".c1").css({ transform: "translateX(200px) scale(1)", "z-index": "9" });
      $(".c2").css({ transform: "translateX(0) scale(1.5)", "z-index": "99" });
      flag = 1;
    } else if (flag == 1) {
      $(".c1").css({
        transform: "translateX(-200px) scale(1)",
        "z-index": "9",
      });
      $(".c2").css({ transform: "translateX(200px) scale(1)", "z-index": "9" });
      $(".c3").css({ transform: "translateX(0) scale(1.5)", "z-index": "99" });
      flag = 2;
    } else if (flag == 2) {
      $(".c2").css({
        transform: "translateX(-200px) scale(1)",
        "z-index": "9",
      });
      $(".c3").css({ transform: "translateX(200px) scale(1)", "z-index": "9" });
      $(".c1").css({ transform: "translateX(0) scale(1.5)", "z-index": "99" });
      flag = 0;
    }
  });
});
