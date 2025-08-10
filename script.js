// Highlight active menu item on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadResume");

  downloadBtn.addEventListener("click", function (event) {
    event.preventDefault(); // stop default link behavior

    const link = document.createElement("a");
    link.href = "SNEKHA R.pdf"; // exact file path
    link.download = "SNEKHA R.pdf"; // file name when saved
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

