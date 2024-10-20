function updateViewport() {
  const viewport = document.getElementById("viewport");
  if (window.innerWidth < 800) {
    viewport.setAttribute(
      "content",
      "width=device-width, initial-scale=0.2, maximum-scale=0.2"
    );
  } else {
    viewport.setAttribute(
      "content",
      "width=1080px, initial-scale=1.0, maximum-scale=1.0"
    );
  }
}
window.onload = updateViewport;
window.onresize = updateViewport;

function scrollToEarlyAccess() {
  document.getElementById("early-access").scrollIntoView({
    behavior: "smooth",
  });
}
