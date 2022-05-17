const body = document.querySelector("body");
const container = document.querySelector(".container");
const navBurger = document.querySelector(".nav__burger");
const navList = document.querySelector(".nav__list");
const hasSubnavs = document.querySelectorAll(".has__subnavs");
const subnavs = document.querySelectorAll(".subnavs");
const newsFilterHeader = document.querySelector(".news__filter__header");
const matchBoxBtn = document.querySelectorAll(".matchBox__btn");
navBurger.addEventListener("click", () => {
  body.classList.toggle("no-scroll");
  container.classList.toggle("active");
  navBurger.classList.toggle("active");
  navList.classList.toggle("active");
})
if (document.querySelector(".has__subnavs")) {
  hasSubnavs.forEach(item => {
    item.addEventListener("click", event => {
      if (!item.classList.contains("active")) {
        hasSubnavs.forEach(item => {
          item.classList.remove("active")
        })
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  })
  subnavs.forEach(item => {
    item.addEventListener("click", event => {
      event.stopPropagation();
    });
  });
}
if(document.querySelector(".news__filter")) {
  newsFilterHeader.addEventListener("click", event => {
    newsFilterHeader.classList.toggle("active");
  })
  const newsFilterItems = document.querySelector(".news__filter__items");
  if (document.querySelector(".filterHasSubnavs")) {
    let filterHasSubnavs = document.querySelectorAll(".filter__has__subnavs");
    filterHasSubnavs.forEach(item => {
      item.addEventListener("click", () => {
        if (!item.classList.contains("active")) {
          clearActiveClasses();
          item.classList.add("active")
        } else {
          item.classList.remove("active")
        }
      })
  
      function clearActiveClasses() {
        filterHasSubnavs.forEach(item => {
          item.classList.remove("active")
        })
      }
    })
  }
}
if (document.querySelector(".matchBox__views")) {
  const matchBoxViews = document.querySelector(".matchBox__views");
  matchBoxBtn.forEach(item => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("active")) {
        matchBoxBtn.forEach(item=> {
          item.classList.remove("active")
        })
        if(item.classList.contains("matchBox__next")) {
          matchBoxViews.style.transform = "translateX(" + -100 + "%)";
          item.classList.add("active")
        }
        if(item.classList.contains("matchBox__prev")) {
          matchBoxViews.style.transform = "translateX(0)";
          item.classList.add("active")
        }
      } 
    });
  })
}
