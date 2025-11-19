document.addEventListener("DOMContentLoaded", () => {

    // Crear el botón si no existe
    if (!document.querySelector("#toggleDark")) {
        const btn = document.createElement("div");
        btn.id = "toggleDark";
        btn.textContent = "◐";
        document.body.appendChild(btn);
    }

    const toggle = document.querySelector("#toggleDark");

    toggle.onclick = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", document.body.classList.contains("dark"));
    };

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }
});
