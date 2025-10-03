document.addEventListener("DOMContentLoaded", function() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const close = document.querySelector(".lightbox .close");

  // Add click event to all research images
  document.querySelectorAll(".research-image").forEach(img => {
    img.addEventListener("click", function() {
      lightbox.style.display = "block";
      lightboxImg.src = this.src;  // show the same image in big view
    });
  });

  // Close when clicking the X
  close.onclick = function() {
    lightbox.style.display = "none";
  };

  // Close when clicking outside the image
  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  };
});
