function closeForm() {
  document.getElementById("form-container").style.display = "none";
}

window.addEventListener("load", () => {
  new Typewriter("#typewriter", {
    strings: ["Hi I'm Afsar...",
      "Front-end Developer",
      "Web Designer",
      "Financial Analyst",
    ],
    autoStart: true,
    loop: true,
  });
});


window.addEventListener("load", () => {
  new Typewriter("#typewriterr", {
    strings: ["PROJECTS...",
    ],
    autoStart: true,
    loop: true,
  });
});
