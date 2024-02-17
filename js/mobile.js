document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-button")
  const mobileMenu = document.querySelector(".mobile-menu")

  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
  })
})
