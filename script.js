// JavaScript to handle dialogue audio playback and background music control
window.addEventListener('DOMContentLoaded', () => {
    const dialogues = document.querySelectorAll('.dialogue');

    // Background music control
    const backgroundMusic = document.getElementById('background-music');

    // Play/pause functionality for the background music
    const toggleMusicButton = document.createElement('button');
    toggleMusicButton.textContent = 'Toggle Music';
    document.body.appendChild(toggleMusicButton);

    toggleMusicButton.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    });

    dialogues.forEach(dialogue => {
        dialogue.addEventListener('click', () => {
            const audioFile = dialogue.getAttribute('data-audio');
            const audio = new Audio(audioFile);
            audio.play();
        });
    });
});