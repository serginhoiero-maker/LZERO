// Personalize os links abaixo. Deixe "" se ainda não tiver o endereço.
const LZERO_LINKS = {
  instagram: "https://www.instagram.com/lzerooficial/",
  youtube: "https://youtube.com/@lzeroofc",
  spotify: "https://open.spotify.com/artist/1B22jCvBNizNsmPAO6Cflw",
  email: "mailto:contato@lzero.com.br"
};
document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  const url = LZERO_LINKS[key];
  if (url && url.trim()) {
    el.href = url;
    if (!url.startsWith("mailto:")) {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  } else {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Adicione o link de " + key + " no arquivo script.js para ativar este botão.");
    });
  }
});


const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

