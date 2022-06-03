const emailCollectorForm = document.getElementById("emailCollector")
const mainContent = document.getElementById("mainContent")

emailCollectorForm.addEventListener("submit", event => {
  event.preventDefault()
  console.log("working")
  const ourFormData = new FormData(event.target)

  const userFirstName = ourFormData.get("firstName")
  const userEmail = ourFormData.get("emailAddress")

  const updatedHtmlContent = `
  <h2>Congratulations, ${userFirstName}</h2>

  <p class="subtitle"> You're on your way to becoming a BBQ Master! </p>

  <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmail}</p>
  `

  mainContent.innerHTML = updatedHtmlContent
})