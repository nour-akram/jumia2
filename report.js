const form = document.getElementById("form")
const inputs = document.querySelectorAll('.input')
form.addEventListener("submit", (e) => {
  e.preventDefault()
  inputs.forEach(input => {
    if (input.value === '') {
      input.classList.add('input-empty')
      input.addEventListener('change', () => {
        input.classList.remove('input-empty')
      })
    }
  })
})