const emailCollectorForm = document.getElementById("emailCollector")
const mainContent = document.getElementById("mainContent")

emailCollectorForm.addEventListener("submit", event => {
  event.preventDefault()
  console.log("working")
  const ourFormData = new FormData(event.target)

  const userFirstName = ourFormData.get("firstName")

  const updatedHtmlContent = `
  <h2>Congratulations, ${userFirstName}</h2>

  <p class="subtitle"> You're on your way to becoming a BBQ Master! </p>

  <p class="fine-print">We'll never share your information without your permission</p>
  `

  mainContent.innerHTML = updatedHtmlContent
})