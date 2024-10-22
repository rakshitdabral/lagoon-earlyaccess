// function updateViewport() {
//   const viewport = document.getElementById("viewport");
//   if (window.innerWidth < 800) {
//     viewport.setAttribute(
//       "content",
//       "width=device-width, initial-scale=0.2, maximum-scale=0.2"
//     );
//   } else {
//     viewport.setAttribute(
//       "content",
//       "width=1080px, initial-scale=1.0, maximum-scale=1.0"
//     );
//   }
// }
// window.onload = updateViewport;
// window.onresize = updateViewport;

// function scrollToEarlyAccess() {
//   document.getElementById("early-access").scrollIntoView({
//     behavior: "smooth",
//   });
// }


// function scrollToEarlyAccess() {
//   const section = document.getElementById('early-access');
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// }


function scrollToEarlyAccess() {
  const target = document.getElementById('early-access');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error('Target section not found!');
  }
}



document.addEventListener("scroll", function() {
  const homeImage = document.querySelector('.home-image img');
  const imagePosition = homeImage.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (imagePosition < screenHeight - 100) { // Adjust this number as per your need
    homeImage.classList.add('visible');
  } else {
    homeImage.classList.remove('visible');
  }
});

