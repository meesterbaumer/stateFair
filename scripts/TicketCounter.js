const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let totalTickets = 0

eventHub.addEventListener("rideTicketPurchased", () => {
  incrementer()
  DisplayTickets()
})

eventHub.addEventListener("gameTicketPurchased", () => {
  incrementer()
  DisplayTickets()
})

eventHub.addEventListener("foodTicketPurchased", () => {
  incrementer()
  DisplayTickets()
})

eventHub.addEventListener("sideshowTicketPurchased", () => {
  incrementer()
  DisplayTickets()
})

eventHub.addEventListener("fullPackagePurchased", () => {
  incrementer()
  DisplayTickets()
})

export const incrementer = () => totalTickets++

export const DisplayTickets = () => {
  contentTarget.innerHTML = `Total Tickets ${totalTickets}`
}