// Get elements
const loveLink = document.querySelector('.love-link');
const homePage = document.querySelector('.home-page');
const birthdayPage = document.querySelector('.birthday-page');
const playButton = document.getElementById('playButton');
const birthdayAudio = document.getElementById('birthdayAudio');

// Add event listener to the love icon link
loveLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    homePage.style.display = 'none'; // Hide home page
    birthdayPage.style.display = 'flex'; // Show birthday page
});

playButton.addEventListener('click', function () {
    if (birthdayAudio.paused) {
        birthdayAudio.play();
        playButton.textContent = 'Pause Music';
    } else {
        birthdayAudio.pause();
        playButton.textContent = 'Play Music';
    }
});