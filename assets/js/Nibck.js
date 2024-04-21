// Targeting elements/css properties for DOM manipulation

// Targeting .inner-toggle for toggle button
let toggleBtn = document.querySelector(".inner-toggle");

// Targeting .themeName
// for changing text Day or Night of toggle
let modeName = document.querySelector(".themeName");

// Targeting .headline
// for heading line in program section for black
let headLine = document.querySelector(".headline");

// Targeting .headForm
// for changing background of contact us in black
let contactBackground = document.querySelector(".headForm");

// Targeting .credential
// for last line of document, changing text color
let credit = document.querySelector(".credential");
let textCredit = document.querySelector(".credentialLink");

// Added event listener for theme day to night mode
// on click themeSwitch() will change selected element properties
toggleBtn.addEventListener("click", function themeSwitch() {
  // condition checks if theme is day, change into night; vice-versa
  if (modeName.innerHTML == "Day") {
    // DAY MODE

    document.body.style.background = "black"; // background in dark mode

    modeName.innerHTML = "Night"; // change day text to night

    headLine.style.color = "white"; // headline color changed to white

    contactBackground.style.background = "black"; // change background of contact section to black
    contactBackground.style.color = "white"; // change text color of contact section to white

    credit.style.color = "white"; // change text color of credential section
    textCredit.style.color = "blue"; // change link text color of credential section
  } else {
    // NIGHT MODE

    document.body.style.background = "white"; // background in light mode

    modeName.innerHTML = "Day"; // change night text to day

    headLine.style.color = "black"; // headline color changed to black

    contactBackground.style.background = "rgb(238, 233, 233)"; // change background of contact section to light gray
    contactBackground.style.color = "black"; // change text color of contact section to black

    credit.style.color = "black"; // change text color of credential section (link)
  }
});
