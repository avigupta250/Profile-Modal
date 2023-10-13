// const modal=document.getElementsByClassName("modal");
// const overlay=document.getElementsByClassName("overlay");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


// modal open function
function openModal()
{
    modal.classList.add("active");
    overlay.classList.add("overlayactive");

}

function closeModal()
{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

