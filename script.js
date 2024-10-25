function scrollToEarlyAccess() {
  const target = document.getElementById("early-access");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Target section not found!");
  }
}

document.addEventListener("scroll", function () {
  const homeImage = document.querySelector(".home-image img");
  const imagePosition = homeImage.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (imagePosition < screenHeight - 100) {
    // Adjust this number as per your need
    homeImage.classList.add("visible");
  } else {
    homeImage.classList.remove("visible");
  }
});

document
  .getElementById("get-access-btn")
  .addEventListener("click", function () {
    const emailInput = document.getElementById("main-4-input").value;
    const popup = document.getElementById("thank-you-popup");
    const popupText = popup.querySelector(".popup-text");
    const icon = popup.querySelector(".icon");
    const closeIcon = popup.querySelector(".close-icon");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    popup.classList.remove("success-popup", "error-popup");

    if (emailInput.trim() === "") {
      popupText.innerHTML = "Please enter your email!";
      popup.classList.add("error-popup");
      closeIcon.style.color = "red";
      icon.innerHTML = `<img src="/Images/cross.png" alt="Cross" class="popup-icon-img">`;
      icon.style.backgroundColor = "transparent";
    } else if (!emailRegex.test(emailInput)) {
      popupText.innerHTML = "Please enter a correct email!";
      popup.classList.add("error-popup");
      closeIcon.style.color = "red";
      icon.innerHTML = `<img src="/Images/cross.png" alt="Cross" class="popup-icon-img">`;
      icon.style.backgroundColor = "transparent";
    } else {
      popupText.innerHTML = "Thank You for registering";
      popup.classList.add("success-popup");
      closeIcon.style.color = "green";
      icon.innerHTML = "&#10003;";
      icon.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
      icon.style.color = "green";
    }

    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 5000);

    closeIcon.addEventListener("click", function () {
      popup.classList.remove("show");
    });
  });
