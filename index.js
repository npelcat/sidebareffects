const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

// événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Ranger la sidebar si on click sur le contenu principal
content.addEventListener("click", () => {
    sidebar.classList.remove("active");
});


// Aide :
// Priorités en CSS : !important > id > classe > baliseHtml
