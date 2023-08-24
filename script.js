function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de oculos escuro com fundo roxo")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de oculos de grau com fundo amarelo")
  }

  // html.classList.toggle("light")
}
