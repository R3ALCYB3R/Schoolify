const ACCESS_CODE = "1234"; 

function checkLogin() {
    const code = document.getElementById('passkey').value;
    if (code === ACCESS_CODE) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-content').style.display = 'block';
    } else {
        document.getElementById('auth-box').style.display = 'none';
        document.getElementById('quiz-box').style.display = 'block';
    }
}

function resetLogin() {
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('auth-box').style.display = 'block';
}

function showTab(tab) {
    document.getElementById('library').style.display = tab === 'library' ? 'grid' : 'none';
    document.getElementById('downloads').style.display = tab === 'downloads' ? 'grid' : 'none';
}

function openGame(url) {
    document.getElementById('player-container').style.display = 'block';
    document.getElementById('game-iframe').src = url;
    document.title = "Google Docs - Editing...";
}

function closeGame() {
    document.getElementById('player-container').style.display = 'none';
    document.getElementById('game-iframe').src = '';
    document.title = "Google Docs - Schoolify";
}

// Panic Redirect
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") window.location.href = "https://classroom.google.com";
});
