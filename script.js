Array.from(document.querySelectorAll(".letter")).forEach((el) => {
  el.innerText = randomLetter();
});

function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// DARK MODE SWITCH
function darkMode() {
  var darkModeSwitch = document.body;
  darkModeSwitch.classList.toggle("darkMode");
}

// CAROUSEL
let i = 0;
let images = [];
let time = 3000;

images[0] = "https://placekitten.com/1000/400";
images[1] = "https://placekitten.com/1100/400";
images[2] = "https://placekitten.com/1200/400";

function carousel() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("carousel()", time);
}

window.onload = carousel;
