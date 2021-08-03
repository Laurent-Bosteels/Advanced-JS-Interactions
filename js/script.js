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

images[0] = "https://placekitten.com/1440/800";
images[1] = "https://placekitten.com/1500/800";
images[2] = "https://placekitten.com/1600/800";

function carousel() {
  document.getElementById("myHeader").style.backgroundImage = "url(" + images[i] + ")";
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("carousel()", time);
}

window.onload = carousel;
