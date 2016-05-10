Info over applicatie
====================

## doel:
Het doel van de applicatie is het virus te overwinnen door een witte bloedcel te besturen.

## layout:
De layout bestaat uit:

1. Het speelveld
    * Het virus
    * De witte bloedcel
    
2. Controls
    * 4 buttons op de webpagina voor de muis
    * de 4 pijltjestoetsen

3. Tekstvakken
    * 1 met uitleg over het speelveld
    * 1 met gegevens die afhangen wat er gebeurt op het speelveld


## bestcodingpractices
- Keydown event --> zorgde voor probleem met snelheid dat je kon bewegen, opgelost door een keyup event te gebruiken
- Collision detector --> moeilijk om via coordinaten op het scherm eventuele collisions te vinden.
- Issue #3:
 * GSAP delayedcall --> Bleef problemen vormen bij positionering van het virus.
 * requestAnimationFrame --> sneleheid van aanroepen kon niet worden gewijzigd waardoor virus op random momenten stopte met bewegen.
