document.addEventListener("DOMContentLoaded", function () {
  // Iniciar Glide.js
  new Glide("#carrousel", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    autoplay: 5000,
    hoverpause: true,
    animationDuration: 2000,
    animationTimingFunc: "ease-in-out",
  }).mount();

  //Slider de tweets
  const content = [
    {
      title: "Boronstudio",
      handle: "@Boronstudio",
      time: "2 hs",
      text: `📌<span>#OportunidadLaboral</span> Llamado abierto <br />para
        sumarse al equipo de <span>@Boronstudio</span><br />
        master digital.👩‍💻👨‍💻<br />
        Más información 👉<span>https://bit.ly/2OobIHS</span>`,
    },
    {
      title: "Otro Estudio",
      handle: "@OtroEstudio",
      time: "5 hs",
      text: `🚀<span>#NuevasOportunidades</span> Inscríbete en nuestro próximo
        webinar sobre tecnología.<br />
        Únete a <span>@OtroEstudio</span><br />
        Innovación digital.💻📱<br />
        Más detalles aquí 👉<span>https://example.com/webinar</span>`,
    },
  ];
  let currentIndex = 0;

  const socialsContent = document.getElementById("socials-content");
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");

  function updateContent(index) {
    const { title, handle, time, text } = content[index];
    socialsContent.innerHTML = `
          <h5>${title}</h5>
          <span style="display: block">${handle}</span>
          <span>${time}</span>
          <p>${text}</p>
      `;
  }

  arrowRight.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % content.length;
    updateContent(currentIndex);
  });

  arrowLeft.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + content.length) % content.length;
    updateContent(currentIndex);
  });

  updateContent(currentIndex);

  // Recuperar elementos
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navbarResponsive = document.getElementById("navbarResponsive");
  const navbar = document.getElementById("navbar");
  const navLinksResponsive = document.getElementById("navLinksResponsive");
  const logoResponsive = document.getElementById("logo_navResponsive");
  const letterLogoResponsive = document.getElementById("letter-logoResponsive");

  // Menu hamburguesa
  hamburgerBtn.addEventListener("click", function () {
    navLinksResponsive.classList.toggle("active");

    if (navLinksResponsive.classList.contains("active")) {
      navLinksResponsive.style.display = "flex";
    } else {
      navLinksResponsive.style.display = "none";
    }
  });

  // Scroll cuando y > 0
  window.addEventListener("scroll", function () {
    const screenWidth = window.innerWidth;
    if (window.scrollY > 0 && screenWidth > 1024) {
      hamburgerBtn.style.display = "block";
      navbarResponsive.style.display = "flex";
      logoResponsive.style.display = "none";
      letterLogoResponsive.style.display = "flex";
      navbar.style.display = "none";
    } else {
      hamburgerBtn.style.display = "none";
      navbarResponsive.style.display = "none";
      navbar.style.display = "flex";
      logoResponsive.style.display = "flex";
      letterLogoResponsive.style.display = "none";
    }
  });
});
