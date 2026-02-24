document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Téléchargement en cours...");
    });
});

// Sélectionner toutes les images
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("click", function () {

        // Création du fond sombre
        const overlay = document.createElement("div");
        overlay.classList.add("image-overlay");

        // Création de l'image agrandie
        const preview = document.createElement("img");
        preview.src = this.src;

        overlay.appendChild(preview);
        document.body.appendChild(overlay);

        // Fermer au clic
        overlay.addEventListener("click", function () {
            overlay.remove();
        });
    });
});