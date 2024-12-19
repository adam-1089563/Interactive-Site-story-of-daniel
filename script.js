// JavaScript to handle dialogue audio playback
window.addEventListener('DOMContentLoaded', () => {
    const dialogues = document.querySelectorAll('.dialogue');

    dialogues.forEach(dialogue => {
        dialogue.addEventListener('click', () => {
            const audioFile = dialogue.getAttribute('data-audio');
            const audio = new Audio(audioFile);
            audio.play();
        });
    });
});