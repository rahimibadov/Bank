// responsive nav
let hamburger = document.querySelector("#hamburger");
let ul = document.querySelector(".menu");
let home = document.querySelector(".home");
let closeBtn = document.querySelector("#close-btn");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("showData");
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});


closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  hamburger.style.display = "block";
  ul.classList.toggle("showData");

});










//^ home de animasiyali  yazi
let words = document.querySelectorAll(".word");
words.forEach((word)=>{
  let letters = word.textContent.split("");
  word.textContent="";
  letters.forEach((letter)=>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

  Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
      letter.className = "letter out";
    },i * 80);
  });
  nextWord.style.opacity="1";
  Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex +1;
};

changeText();
setInterval(changeText,3000);


var typedd = new Typed(".my-skills-typing", {
    strings: [" Your money matters.",
      "Reliable and trustworthy."],
    typeSpeed: 100,
    backSpeed: 10,
    loop: true
  });

  //^ exchange convertor
  // Include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// For selecting different controls
let search = document.querySelector(".searchBox");
let convert = document.querySelector(".convert-btn");
let fromCurrecy = document.querySelector(".from-countries");
let toCurrecy = document.querySelector(".to-countries");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// Function for updating value
function updateValue(e) {
	searchValue = e.target.value;
}

// When user clicks, it calls function getresults 
convert.addEventListener("click", getResults);

// Function getresults
function getResults() {
	fetch(`${api}`)
		.then(currency => {
			return currency.json();
		}).then(displayResults);
}

// Display results after conversion
function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	finalValue.innerHTML =
		((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.style.display = "block";
}

// When user click on reset button
function clearVal() {
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";
};

// section4

$(document).ready(function() {
  //seInterval animate margin-left and the last slide go to the first position (0px) 

  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;
  // try and configure all the variables so that you can change it at any point( things of the same type at the same place)

  var $slider = $("#slider");
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  //the jQuery selector is used only once and the code is very efficient as you are CACHING THE DOM
  var interval;
  //have to define the variable outside startSlider() to have it in the scope of a function call

  function startSlider() {
  interval =  setInterval(function() {
      $($slideContainer).animate({
        "margin-left": "-=" + width
      }, animationSpeed, firstSlide);
    }, pause);

    function firstSlide() {
      currentSlide++;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css("margin-left", 0);
      }
    }
  }
  
  function stopSlider(){
    clearInterval(interval);
  }
  $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);

  startSlider();
});