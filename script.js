function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // se tiver light mode
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
  }
  if (html.classList.contains("light")) {
    // se tiver sem light mode
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
