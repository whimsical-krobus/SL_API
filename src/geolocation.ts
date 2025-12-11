// Funktion som initierar geolokalisering
export function initGeolocation() {
  // Hämtar elementen från HTML (knapp + textfält)
  const btn = document.getElementById("geo-btn") as HTMLButtonElement | null;
  const latEl = document.getElementById("lat");
  const lonEl = document.getElementById("lon");

  // Om något av elementen saknas, avbryt
  if (!btn || !latEl || !lonEl) return;

  // När användaren klickar på knappen
  btn.addEventListener("click", () => {
    // Kontrollera om webbläsaren stödjer geolocation
    if (!navigator.geolocation) {
      latEl!.textContent = "Geolokalisering stöds inte av denna webbläsare.";
      return;
    }

    // Hämta användarens position
    navigator.geolocation.getCurrentPosition(
      // Om positionen hämtas framgångsrikt
      (position) => {
        latEl!.textContent = "Latitud: " + position.coords.latitude.toFixed(5);
        lonEl!.textContent = "Longitud: " + position.coords.longitude.toFixed(5);

      },

      // Om något fel uppstår
      (error) => {
        latEl!.textContent = "Kunde inte hämta position.";
        lonEl!.textContent = "";
      }
    );
  });
}
