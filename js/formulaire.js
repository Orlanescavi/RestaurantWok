document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reservationForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var date = document.getElementById("date").value;
        var heure = document.getElementById("time").value;
        var personnes = document.getElementById("people").value;
        var prenom = document.getElementById("prenom").value;
        var nom = document.getElementById("nom").value;
        var email = document.getElementById("email").value;
        var telephone = document.getElementById("phone").value;

        if (date === "" || heure === "" || personnes === "" || prenom === "" || nom === "" || email === "" || telephone === "") {
            alert("Veuillez remplir tous les champs.");
        }  
        else if (date === 'dimanche' || heure <= '12' || heure > '15' || heure > '22'){
            alert("Le restaurant n'est pas ouvert. Veuillez trouver un autre créneau.");
            return;
        } else {
            window.location.href = "formulaire_confirmation.html";
        }
    });
});
