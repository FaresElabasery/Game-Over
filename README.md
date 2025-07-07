# Game Over

Game Over is a modern web application that lets you browse and discover free-to-play games by category, view detailed information, and quickly access official game pages. Built with vanilla JavaScript, Bootstrap, and the FreeToGame API, it offers a responsive and interactive user experience.

## Features

- **Browse Games:** Instantly view a list of current free-to-play games.
- **Category Filtering:** Filter games by popular categories (e.g., MMORPG, Shooter, Sailing, Permadeath, Superhero, Pixel).
- **Game Details:** Click any game to see a detailed view, including description, genre, platform, status, and a direct link to the official site.
- **Sticky Header:** Navigation remains accessible as you scroll.
- **Responsive Design:** Fully responsive layout using Bootstrap.
- **Loading Indicator:** Displays a loader while fetching data from the API.
- **Modern UI:** Clean, visually appealing interface with custom styles and icons.

## Screenshots

![Game Over Home](images/image.png)
*Example of the game cards layout.*

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- Internet connection (to fetch data from the FreeToGame API)

### Installation

1. **Clone the repository or download the source code:**
    ```sh
    git clone https://github.com/yourusername/game-over.git
    ```
    Or simply download and extract the ZIP file.

2. **Open the Application:**
    - Double-click the `index.html` file, or open it in your preferred browser.

> **Note:** No build tools or server setup required.

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

- **[`index.html`](index.html):** The main HTML file.
- **`css/`:** Stylesheets for the application.
    - `bootstrap.min.css`: Bootstrap CSS framework.
    - `all.min.css`: Font Awesome icons.
    - `main.css`: Custom styles.
- **`js/`:** JavaScript modules.
    - [`index.js`](js/index.js): Main entry point, handles navigation and app logic.
    - [`home.module.js`](js/home.module.js): Fetches the list of games from the API.
    - [`details.module.js`](js/details.module.js): Fetches details for a specific game.
    - [`ui.module.js`](js/ui.module.js): Renders UI components and handles DOM updates.
    - `bootstrap.bundle.min.js`: Bootstrap JS framework.
- **`images/`:** Application images (background, logo, etc.).
- **`webfonts/`:** Font Awesome web fonts.

## Usage

- **Browse:** The homepage displays a grid of games. Use the navigation bar to filter by category.
- **View Details:** Click any game card to open a detailed view with more information and a link to play.
- **Navigation:** The sticky header keeps navigation accessible at all times.

## API Used

This project uses the [FreeToGame API](https://www.freetogame.com/api-doc) to fetch up-to-date game information.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

## License

This project is licensed under the MIT License.

---

*Made with ❤️ for gamers everywhere!*