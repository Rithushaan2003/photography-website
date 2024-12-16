// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
function openModal(img) {
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "flex"; // Show modal
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Get the <span> element to close the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}