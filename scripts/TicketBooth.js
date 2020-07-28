const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

// Listener for Ride Tickets
eventHub.addEventListener("click", clickEvent => {
    const clickId = clickEvent.target.id

    if (clickId === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
    
        eventHub.dispatchEvent(rideEvent)
    }
})

// Listener for Food Tickets
eventHub.addEventListener("click", clickEvent => {
    const clickId = clickEvent.target.id

    if (clickId ==="foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})

// Listener for Game Tickets
eventHub.addEventListener("click", clickEvent => {
    const clickId = clickEvent.target.id

    if (clickId ==="gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})

// Listener for Sideshow Tickets
eventHub.addEventListener("click", clickEvent => {
    const clickId = clickEvent.target.id

    if (clickId === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    }
})


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}

