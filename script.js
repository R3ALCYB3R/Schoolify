function openGame(url) {
    const library = document.getElementById('library');
    const player = document.getElementById('player-container');
    const iframe = document.getElementById('game-iframe');

    // Hide library, show player
    library.style.display = 'none';
    player.style.display = 'block';
    
    // Load the game
    iframe.src = url;
}

function closeGame() {
    const library = document.getElementById('library');
    const player = document.getElementById('player-container');
    const iframe = document.getElementById('game-iframe');

    // Show library, hide player
    library.style.display = 'grid';
    player.style.display = 'none';
    
    // Stop the game (clears memory/audio)
    iframe.src = '';
}
