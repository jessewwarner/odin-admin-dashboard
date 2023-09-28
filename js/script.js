modeBtn = document.querySelector('.mode-btn');

function toggleMode() {
    const icon = document.querySelector('.mode-icon');
    const buttonText = document.querySelector('.mode-text');

    // Toggle between fa-moon and fa-sun classes
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    // Update the button text based on the current icon class
    if (icon.classList.contains('fa-moon')) {
        buttonText.textContent = 'Dark Mode';
    } else {
       buttonText.textContent = 'Light Mode';
    }

    document.body.classList.toggle('dark-mode');
  }

modeBtn.addEventListener('click', (e) => {
    toggleMode();
});