 // Date de l'événement
 const dateEvenement = new Date("2023-12-31 00:00:00").getTime();

 // Fonction pour mettre à jour le compteur
 function mettreAJourCompteur() {
   const maintenant = new Date().getTime();
   const tempsRestant = dateEvenement - maintenant;

   const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
   const heures = Math.floor(
     (tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   const minutes = Math.floor(
     (tempsRestant % (1000 * 60 * 60)) / (1000 * 60)
   );
   const secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);

   document.getElementById("jours").textContent = jours
     .toString()
     .padStart(2, "0");
   document.getElementById("heures").textContent = heures
     .toString()
     .padStart(2, "0");
   document.getElementById("minutes").textContent = minutes
     .toString()
     .padStart(2, "0");
   document.getElementById("secondes").textContent = secondes
     .toString()
     .padStart(2, "0");

   // Si l'événement est passé
   if (tempsRestant < 0) {
     document.getElementById("compteur").textContent =
       "Événement terminé !";
   }
 }

 // Mettre à jour le compteur toutes les 1 seconde
 setInterval(mettreAJourCompteur, 1000);

 // Mettre à jour le compteur immédiatement après le chargement de la page
 mettreAJourCompteur();