# WarGame Documentation

## Libraries / Frameworks Used

### Front-End

  - React
  - React-Router-Dom
  - Create-React-App
  - React-Dom
  - React-Scripts

### Back-End

  - Flask
  - Flask-SQLAlchemy
  - SQLAlchemy
  - Python-DotENV
  - FLask-WTF
  - Flask-CORS
  - Werkzeug
  - Flask-Migrate
  - Alembic
  - Pytest
  - Psycopg-Binary
  - Psyocpg@
  - Gunicorn

## MVPS

  - Dual User Input 
    - Users can input their name, and their opponents name, then begin the game
  - Start Button
    - Upon entering valid names in both name input fields, a user can begin the game by clicking "Start Game"
  - Next Round Button
    - Upon starting the game, splitting the deck evenly between both players, users can progress the game forward with the "Next Round" button
  - War Stage
    - Upon reaching duplicate cards, the state of the game changes to WAR.
      - When clicking the "Next Round" button.
      - 1 card for each player is drawn, placed faced down. 
      - Then 1 more card is then placed on the table, to be compared. 
      - Winner of war obtains every card drawn during the war.

## Things I want to add at a later date
  - Deck randomizer on every hand deal to prevent 'infinite loop games'
  - Deck size changer button to swap between a 26 card deck, an 8 card deck, and a 5 card deck, to fine tune user experience.
  - Removal of usernames from leaderboards, for the people who cant stand to see their buddy's reign over their score
  - Input validations to prevent too short/long of names

## RUNNING THE APP

Go to the link https://kk-wargame.herokuapp.com/ , otherwise if that doesn't work, then follow these steps and it should work, email me at kevinkaras2@gmail.com if there are any errors.

  - Download the repo, unzip the file, you should have the main directory on your desktop.
  - Open Terminal 1 and navigate to the WarGame directory
    - Once inside, run the command 'npm install'
    - Once complete, navigate into the react-app folder, and run 'npm install' again, then run 'npm start', this will spin up the front end         to display the react components for you.
  - With Terminal 1 still running, open another Terminal 2, and navigate to the WarGame directory, then to the 'WarGame' directory.
    - Once inside, run the command 'pipenv install', this will spin up the backend server for you to begin playing.
