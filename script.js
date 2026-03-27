// Change '1234' to whatever you want your secret password to be
const SECRET_PASS = "1234";

function checkLogin() {
    let input = document.getElementById('passkey').value;
    if (input === SECRET_PASS) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-content').style.display = 'block';
    } else {
        alert("Incorrect Student ID");
    }
}

function showTab(tabName) {
    document.getElementById('library').style.display = tabName === 'library' ? 'grid' : 'none';
    document.getElementById('downloads').style.display = tabName === 'downloads' ? 'grid' : 'none';
}

function openGame(url) {
    document.getElementById('app-content').style.display = 'none';
    document.getElementById('player-container').style.display = 'block';
    document.getElementById('game-iframe').src = url;
    document.title = "Google Docs - Editing...";
}

function closeGame() {
    document.getElementById('app-content').style.display = 'block';
    document.getElementById('player-container').style.display = 'none';
    document.getElementById('game-iframe').src = '';
    document.title = "Google Docs - Schoolify";
}

// Emergency Exit
window.onkeydown = function(e) {
    if (e.key === "Escape") {
        window.location.href = "https://classroom.google.com";
    }
}
