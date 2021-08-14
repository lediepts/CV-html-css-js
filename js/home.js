
function clickMenu(event) {
  const menuTop = document.getElementById('main-top')
  const menuTopMobile = document.getElementById('main-top-mobile')
  const aTags = menuTop.querySelectorAll("a")
  const aTagsMobile = menuTopMobile.querySelectorAll("a")
  const tags = [...aTags, ...aTagsMobile]

  // xoa class active khoi danh sach the a
  for (let index = 0; index < tags.length; index++) {
    tags[index].classList.remove("active")
  }
  // them class active vao the a dc kich hoat
  event.target.classList.add("active")
}

function handleClick() {
  const menuButton = document.getElementById("menuButton")
  const panelMenu = document.getElementById("panelMenu")
  menuButton.classList.toggle("open")
  panelMenu.classList.toggle("open")
}
