const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    const clickId = clickEvent.target.id

    if (clickId === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
    }
    eventHub.dispatchEvent(rideEvent)
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

