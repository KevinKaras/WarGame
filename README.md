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

## RUNNING THE APP

  - Download the repo, unzip the file, you should have the main directory on your desktop.
  - Open Terminal 1 and navigate to the WarGame directory, once inside, navigate to the 'react-app' directory
    - Once inside, run the command 'npm start', this will spin up the front end to display the react components for you.
  - With Terminal 1 still running, open another Terminal 2, and navigate to the WarGame directory, then to the 'app' directory.
    - Once inside, run the command 'pipenv run flask run', this will spin up the backend server for you to begin playing.
