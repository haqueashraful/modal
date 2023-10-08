// Get the modal and buttons
var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal
openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
    openModalBtn.style.display = "none";
});

// Close the modal
closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
    openModalBtn.style.display = "block";
});

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        openModalBtn.style.display = "block";

    }
});
