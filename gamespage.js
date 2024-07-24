document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('games-container');

    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'game';

        const gameTitle = document.createElement('h3');
        gameTitle.textContent = game.title;
        gameDiv.appendChild(gameTitle);

        const gameDescription = document.createElement('p');
        gameDescription.textContent = game.description;
        gameDiv.appendChild(gameDescription);

        const gameLink = document.createElement('a');
        gameLink.href = game.link;
        gameLink.textContent = 'Play Now';
        gameLink.target = '_blank'; // Open in a new tab
        gameDiv.appendChild(gameLink);

        gamesContainer.appendChild(gameDiv);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('games-container');

    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'game';

        const gameImage = document.createElement('img');
        gameImage.src = game.image;
        gameImage.alt = game.title;
        gameDiv.appendChild(gameImage);

        const gameTitle = document.createElement('h3');
        gameTitle.textContent = game.title;
        gameDiv.appendChild(gameTitle);

        const gameDescription = document.createElement('p');
        gameDescription.textContent = game.description;
        gameDiv.appendChild(gameDescription);

        const gameLink = document.createElement('a');
        gameLink.href = game.link;
        gameLink.textContent = 'Play Now';
        gameLink.target = '_blank'; // Open in a new tab
        gameDiv.appendChild(gameLink);

        gamesContainer.appendChild(gameDiv);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('games-container');

    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'game';

        const gameImage = document.createElement('img');
        gameImage.src = game.image;
        gameImage.alt = game.title;
        gameDiv.appendChild(gameImage);

        const gameTitle = document.createElement('h3');
        gameTitle.textContent = game.title;
        gameDiv.appendChild(gameTitle);

        const gameDescription = document.createElement('p');
        gameDescription.textContent = game.description;
        gameDiv.appendChild(gameDescription);

        const gameLink = document.createElement('a');
        gameLink.href = game.link;
        gameLink.textContent = 'Play Now';
        gameLink.target = '_blank'; // Open in a new tab
        gameDiv.appendChild(gameLink);

        gamesContainer.appendChild(gameDiv);
    });
});
