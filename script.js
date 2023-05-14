const rigthDot = document.querySelector(".right__dot");
const leftDot = document.querySelector(".left__dot");
const slidOne = document.querySelector(".slide__one");
const slidetwo = document.querySelector(".slide__two");
const showDetailBtn = document.querySelectorAll(".show__detail");
const projectInfo = document.querySelectorAll(".project__info");
const projectImage = document.querySelector(
  ".project__image__container"
).children;
rigthDot.addEventListener("click", () => {
  slidOne.style.display = "none";
  slidetwo.style.display = "flex";
  rigthDot.style.backgroundColor = "black";
  leftDot.style.backgroundColor = "";
});

leftDot.addEventListener("click", () => {
  slidetwo.style.display = "none";
  slidOne.style.display = "flex";
  leftDot.style.backgroundColor = "black";
  rigthDot.style.backgroundColor = "";
});

for (let i = 0; i < showDetailBtn.length; i++) {
  showDetailBtn[i].addEventListener("click", () => {
    if (showDetailBtn[i].className == "btn show__detail") {
      showDetailBtn[i].classList.add("hide__detail");
      showDetailBtn[i].classList.remove("show__detail");
      projectInfo[i].style.display = "block";
      showDetailBtn[i].innerHTML = "Hide Details";
    } else {
      projectInfo[i].style.display = "none";
      showDetailBtn[i].classList.add("show__detail");
      showDetailBtn[i].classList.remove("hide__detail");
      showDetailBtn[i].innerHTML = "Project Details";
    }
  });
}

// project slider
const slider = document.querySelector(".project__image__container");
const dots = document.querySelectorAll(".project__dot");

for (let index = 0; index < dots.length; index++) {
  dots[index].addEventListener("click", () => {
    slider.scrollTo({
      left: index * slider.offsetWidth,
      behavior: "smooth",
    });
    for (let i = 0; i < projectImage.length; i++) {
      projectImage[i].classList.remove("show");
    }
    projectImage[index].classList.add("show");
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  });
}

let projectContainer = document.querySelector(".project__container");
let projectBtns = document.querySelectorAll(".project__display__btn");
let myProjects = document.querySelectorAll(".my__projects");
for (let index = 0; index < projectBtns.length; index++) {
  projectBtns[index].addEventListener("click", () => {
    projectContainer.scrollTo({
      left: index * projectContainer.offsetWidth,
      behavior: "smooth",
    });
    for (let i = 0; i < myProjects.length; i++) {
      myProjects[i].classList.remove("show__project");
    }
    myProjects[index].classList.add("show__project");

    const projects = Array.from(myProjects);
    for (let i = 0; i < projects.length; i++) {
      projects[i].classList.remove("show__project");
    }
    myProjects[index].classList.add("show__project");

    projectBtns.forEach((dot) => dot.classList.remove("active__btn"));
    projectBtns[index].classList.add("active__btn");
  });
}
// shuffling lists using time interval
function shuffleList() {
  let mySkills = document.querySelector(".my__skills");
  for (let i = mySkills.children.length; i >= 0; i--) {
    mySkills.appendChild(mySkills.children[(Math.random() * i) | 0]);
  }
}

setInterval(shuffleList, 3000);
// show more project info

let showMoreBtn = document.querySelector(".read__more__btn");
showMoreBtn.addEventListener("click", function () {
  let paragraph = document.querySelector(".work__intro");
  let button = document.querySelector(".read__more__btn");
  if (paragraph.style.webkitLineClamp === "unset") {
    paragraph.style.webkitLineClamp = "4";
    button.textContent = "Read More";
  } else {
    paragraph.style.webkitLineClamp = "unset";
    button.textContent = "Read Less";
  }
});

// window popup
let aboutMe = document.querySelector("#openPopup");
aboutMe.addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "none";
});

document
  .getElementById("popupContainer")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      document.getElementById("popupContainer").style.display = "none";
    }
  });
