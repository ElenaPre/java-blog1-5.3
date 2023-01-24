"use strict";

function titleClickHandler(event) {
  event.preventDefault();
  console.log("Link was clicked!");
  const clickedElement = this;
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");
  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }
  /* add class 'active' to the clicked link */
  clickedElement.classList.add("active");
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".posts article.active");
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }
  /* get 'href' attribute from the clicked link */
  const attributeActive = clickedElement.getAttribute("href");

  /* find the correct article using the selector (value of 'href' attribute) */
  const articleSelector = document.querySelector(attributeActive);

  /* add class 'active' to the correct article */
  articleSelector.classList.add("active");
}

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

// Kod nie działa.
// <<<<<<<<<HEAD psuje wykonywanie kodu.
// Do tego popraw nazwy funkcji (np. funkcja generateTitleLinks nie generuje linków), usuń komentarze.
// const przerzuć na górę. Nie trzymaj ich w środku dokumentu i zadbaj o spójność.
//Czasami używasz ich, a czasami po prostu w querySelector dodajesz string. Dodaj do wszystkiego const. W ten sposób unikniesz błędów związanych z literówkami.

// Kod nie działa, prawdopodobnie dlatego, że po wysłaniu linku do zadania
//kontynuowałem pracę z kodem i oczywiście go zmieniłem. Może uczynić każde nowe zadanie osobnym GIF-em

// wykonałam zadanie zgodnie z zaleceniem w module, mam na myśli rozmieszczenie const i komentarzy.
