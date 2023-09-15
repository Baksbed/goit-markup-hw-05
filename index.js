const iSOPen = document.querySelector('.modal');
const btnClose = document.querySelector(".form-button-modal")
const btnOPen = document.querySelector(".button-title")

btnClose.addEventListener("click", () => {
    iSOPen.classList.contains("is-open")?iSOPen.classList.remove("is-open"):iSOPen.classList.add("is-open")
})

btnOPen.addEventListener("click", () => {
       iSOPen.classList.contains("is-open")?iSOPen.classList.remove("is-open"):iSOPen.classList.add("is-open")
 
})