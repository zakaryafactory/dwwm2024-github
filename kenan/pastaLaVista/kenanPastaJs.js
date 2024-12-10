document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('#toggleMode');

    toggleButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (document.body.classList.contains('darkMode')) {
            document.body.classList.remove('darkMode');
            document.body.classList.add('lightMode');
            toggleButton.textContent = '🌙 Mode Sombre';
        
        } else {
            document.body.classList.remove('lightMode');
            document.body.classList.add('darkMode');
            toggleButton.textContent = '☀️ Mode Clair';
        }
    });
});