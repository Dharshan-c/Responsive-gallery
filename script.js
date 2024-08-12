
const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

const galleryItems = document.querySelectorAll(".gallery-item");

function openModal(event) {
    const src = event.target.src;
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = event.target.alt;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Add click event listeners to gallery images
galleryItems.forEach(item => {
    item.addEventListener("click", openModal);
});

// Add click event listener to the close button
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// Close the modal when clicking outside the image
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
