// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { SideshowTicketHolder } from "./sideshows/SideshowTicketHolder.js";
import { FullPackageTicketHolder } from "./FullPackageTicket.js";
import { DisplayTickets } from "./TicketCounter.js";

TicketBooth()
DisplayTickets()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolder()
FullPackageTicketHolder()