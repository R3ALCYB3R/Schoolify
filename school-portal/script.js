function openGame(url) {
    document.getElementById('library').style.display = 'none';
    document.getElementById('main-header').style.display = 'none';
    document.getElementById('player-container').style.display = 'block';
    document.getElementById('game-iframe').src = url;
    document.title = "Google Docs"; // Stay hidden
}

function closeGame() {
    document.getElementById('library').style.display = 'grid';
    document.getElementById('main-header').style.display = 'block';
    document.getElementById('player-container').style.display = 'none';
    document.getElementById('game-iframe').src = '';
    document.title = "Google Docs";
}

// Search Function
function filterGames() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].innerText.toLowerCase();
        cards[i].style.display = title.includes(input) ? "" : "none";
    }
}

// EMERGENCY REDIRECT: Pressing Escape takes you to Google Classroom
window.onkeydown = function(e) {
    if (e.key === "Escape") {
        window.location.href = "https://classroom.google.com";
    }
}
