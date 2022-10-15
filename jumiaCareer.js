const cardTemplate = document.querySelector("[data-card-template]")
const cardsContainer = document.querySelector(".cards-container")

function getData() {
  
  
  const jsonRequest = new XMLHttpRequest()
  jsonRequest.open("GET", "./jumiaCareer.json", true)

  jsonRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      
      const jsonObject = JSON.parse(this.responseText)
      jsonObject.forEach(element => {
        
      const card = cardTemplate.content.cloneNode(true).children[0]
        
        const title = card.querySelector('.title')
        const location = card.querySelector('.location')
        
        title.textContent = element.title
        location.textContent = element.location
        console.log("card");
        cardsContainer.append(card)
        
      })
      
    }
  }

  jsonRequest.send()
}
getData()
