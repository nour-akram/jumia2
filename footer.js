function changecolor(color) {
  var mydiv = document.getElementById("nour")
  mydiv.style.color = `${color}`
  mydiv.style.border =  `2px ${color} solid `
}



const emailForm = document.getElementById("email-form")
const emailInput = document.getElementById('nn')
const inputsContainer = document.getElementById('nour')
emailForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (emailInput.value === "") {
    const span = document.createElement("span")
    span.classList.add("required-field")
    span.textContent = "Required field"
    inputsContainer.insertAdjacentElement("beforeend", span)
    changecolor('red')
  }
})
emailInput.addEventListener('input', () => {
  if (emailInput.value !== '') {
    document.querySelector(".required-field").remove()
  }
})