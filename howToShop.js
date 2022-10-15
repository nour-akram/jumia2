const addButtons = document.querySelectorAll(".add-button")
addButtons.forEach((addButton) => {
  addButton.addEventListener("click", () => {
    addButton.classList.toggle("active")
  })
})
