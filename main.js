let section = document.querySelector("#skills");
let progressSpans = document.querySelectorAll(".skill .place-holder span");
let nums = document.querySelectorAll(".num");
let section1 = document.querySelector("#stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 400) {
    progressSpans.forEach(span => {
      span.style.width = span.dataset.progress;
    })
  } 
  if (window.scrollY >= section1.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
}

function startCount(el) {
  let goal= el.dataset.goal;
  let count = setInterval(()=>{
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal)
}