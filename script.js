document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const arrow = document.getElementById('arrow-anim');
    if (fileInput && arrow) {
        fileInput.addEventListener('change', function() {
            arrow.classList.remove('active');
            void arrow.offsetWidth; // restart animation
            arrow.classList.add('active');
        });
    }
});