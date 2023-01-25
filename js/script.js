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

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles",
  optArticleTagsSelector = ".post-tags .list";
let html = "";

function generateTitleLinks() {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log(titleList);
  titleList.innerHTML = "";
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute("id");
    /* find the title element */
    /* get the title from the title element */
    const titleElement = article.querySelector(optTitleSelector).innerHTML;
    /* create HTML of the link */
    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      titleElement +
      "</span></a></li>";
    console.log(linkHTML);

    /* insert link into titleList */
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll(".titles a");
  console.log(links);

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
}
generateTitleLinks();

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log(tagsWrapper);
    /* make html variable with empty string */

    tagsWrapper.innerHTML("");
    /* get tags from data-tags attribute */
    const tags = document.querySelector("data-tags");
    console.log("kkkkkk", tags);
    /* split tags into array */
    /* START LOOP: for each tag */
    /* generate HTML of the link */
    /* add generated code to html variable */
    /* END LOOP: for each tag */
  }
  /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */
}

generateTags();
