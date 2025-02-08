# Tic Tac Toe Game

This is a simple Tic Tac Toe game that you can play directly in your browser! The game is built using HTML, CSS, and JavaScript, and it's designed to be played by two players.

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that sets up the structure of the game.
- `style.css`: The CSS file for styling the game board and user interface.
- `script.js`: The JavaScript file that contains the logic for the game, including the gameboard, players, and game flow.

## Features

- Two players can take turns to place their marks (X or O) on the board.
- The game checks for a winner or a tie.
- Once the game ends, the result is displayed on the screen.
- Players can restart the game with the click of a button.
- The board is rendered dynamically on the webpage.

## Setup

1. Clone this repository to your local machine:
   ```bash
   git clone git@github.com:saron03/Tic-Tac-Toe.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd Tic-Tac-Toe
   ```

3. Open the `index.html` file in your browser to start playing.

## How It Works

The game logic is separated into different objects to keep the code organized:

- **Gameboard**: Stores the game state (board array) and provides methods for updating and checking the board.
- **Player**: Represents a player, storing their mark (X or O).
- **Game**: Controls the flow of the game, including switching players, checking for a winner, and restarting the game.
- **DisplayController**: Handles the DOM updates, rendering the gameboard and displaying game results.

## Usage

- **Start the game**: Click the "Start Game" button to begin a new game.
- **Play the game**: Click on any empty square on the board to place your mark.
- **End the game**: The game will automatically check for a winner or a tie after each turn. The result will be displayed on the screen.
- **Restart the game**: After the game ends, click the "Restart Game" button to reset the board and start a new game.

## Game Flow

1. Players take turns placing X's and O's on the board.
2. The game checks for a winner (3 marks in a row, column, or diagonal) or a tie (all spaces filled without a winner).
3. When the game ends, the result is displayed (e.g., "Player X wins" or "It's a tie").
4. Players can restart the game anytime.

## Contributions

Feel free to fork this repository and make improvements! If you find any bugs or have ideas for enhancements, please submit an issue or pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy the game!