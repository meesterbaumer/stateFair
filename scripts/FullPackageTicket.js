const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolder = () => {
  eventHub.addEventListener("fullPackagePurchased", customEvent => {
    contentTarget.forEach(
      element => {
        element.innerHTML +=`
        <div class="person bigSpender"></div>
      `
      }
    ) 
  })
}