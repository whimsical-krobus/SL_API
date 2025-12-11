
// Importerar stilfil
import "./style.scss";

// Importerar funktionen som hanterar geolokalisering
import { initGeolocation } from "./geolocation";

// När sidan har laddats färdigt
document.addEventListener("DOMContentLoaded", () => {
  // Startar geolokaliseringen
  initGeolocation();
});
