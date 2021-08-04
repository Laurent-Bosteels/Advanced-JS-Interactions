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

images[0] = "https://placekitten.com/1440/900";
images[1] = "https://placekitten.com/1500/950";
images[2] = "https://placekitten.com/1600/950";

function carousel() {
  document.getElementById("myHeader").style.backgroundImage =
    "url(" + images[i] + ")";
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("carousel()", time);
}

window.onload = carousel;

// COLLAGE-LIGHTBOX

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const lightboxImages = document.querySelectorAll(".collage-image");
lightboxImages.forEach((lightboxImage) => {
  lightboxImage.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = lightboxImage.src;

    //   let alt = lightboxImage.getAttribute('alt');
    // if( alt ) {
    //   image.insertAdjacentHTML('afterEnd', `<p class="caption">${alt}</p>`);
    // }

    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});
