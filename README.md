# Game Over

This is a simple web application that displays a list of free-to-play games and allows you to view details about each game.

## Features

*   Browse a list of current free-to-play games.
*   Filter games by category (e.g., MMORPG, Shooter, etc.).
*   View detailed information about a specific game, including a description, genre, platform, and a link to the game's official website.
*   A sticky header for easy navigation.

## How to Run

1.  Clone the repository or download the source code.
2.  Open the `index.html` file in your web browser.

## Project Structure

```
├── css/
│   ├── all.min.css
│   ├── bootstrap.min.css
│   └── main.css
├── images/
│   ├── bg.png
│   ├── image.png
│   └── logo.png
├── js/
│   ├── bootstrap.bundle.min.js
│   ├── details.module.js
│   ├── home.module.js
│   ├── index.js
│   └── ui.module.js
├── webfonts/
│   └── ...
├── index.html
└── README.md
```

*   **`index.html`**: The main HTML file.
*   **`css/`**: Contains the stylesheets for the application.
    *   `bootstrap.min.css`: The Bootstrap CSS framework.
    *   `all.min.css`: Font Awesome icons.
    *   `main.css`: Custom styles for the application.
*   **`js/`**: Contains the JavaScript files for the application.
    *   `index.js`: The main entry point for the application's JavaScript.
    *   `home.module.js`:  Handles fetching the list of games from the API.
    *   `details.module.js`: Handles fetching the details of a specific game from the API.
    *   `ui.module.js`: Handles rendering the UI components.
    *   `bootstrap.bundle.min.js`: The Bootstrap JavaScript framework.
*   **`images/`**: Contains the images used in the application.
*   **`webfonts/`**: Contains the web fonts for Font Awesome.

## API Used

This project uses the [FreeToGame API](https://www.freetogame.com/api-doc) to fetch game information.