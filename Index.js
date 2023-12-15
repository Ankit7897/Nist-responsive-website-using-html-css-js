
const setectNavItem = document.getElementById("nav-M")
const selectMenu = document.querySelector(".hamburger-Menu")
const closeBtnSelect = document.querySelector(".close-btn")


selectMenu.addEventListener("click", () => {
    setectNavItem.style.display = "block"
    selectMenu.style.display = "none"
    closeBtnSelect.style.display = "block"
})

closeBtnSelect.addEventListener("click", () => {
    selectMenu.style.display = "block"
    setectNavItem.style.display = "none"
    closeBtnSelect.style.display = "none"

})