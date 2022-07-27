
import './App.css';
import Deck1 from './components/Deck1';
import Deck2 from './components/Deck2';
import CardDisplay from './components/CardDisplay';
import LeaderBoard from './components/LeaderBoard';
import SignUp from './components/SignUp';
import { useEffect, useState } from 'react';
import {ShuffledDeck} from './Deck.js'


function App() {
  let [users, setUsers] = useState([])
  let [userLoading, setUserLoading] = useState(true)
  let [names, setNames] = useState([])
  let [curPlayers, setCurPlayers] = useState([])
  let [namesLoading, setNamesLoading] = useState(true)
  let [deck, setDeck] = useState(ShuffledDeck)
  let [player1DeckSize, setPlayer1DeckSize] = useState(26)
  let [player2DeckSize, setPlayer2DeckSize] = useState(26)
  let [player1CardDeck, setPlayer1CardDeck] = useState([])
  let [player2CardDeck, setPlayer2CardDeck] = useState([])
  let [gameStatus, setGameStatus] = useState(false)
  let [warStatus, setWarStatus] = useState(false)
  let [deckDisplay, setDeckDisplay] = useState([])

  

  const onLoad = async () => {
    let response = await fetch('http://127.0.0.1:5000/')
    let res = await response.json()
    setUsers(res.score)
    setUserLoading(false)
    let usersJSX = res.score.map((user) =>{
      return (
              <div key={user.id} className="UserContainer">
                <div className="User-Name">{user.name}</div>
                <div className="User-Wins">{user.wins}</div>
              </div>
             )
    })
    setNames(usersJSX)
  }
  

  useEffect(()=>{
    onLoad()
  }, [deckDisplay])

  return (
    <div className="App">
      <div className='Left-Side'>
        <div className='User-Bar'>
          <SignUp props={{onLoad, setCurPlayers, setGameStatus, deck, setPlayer1CardDeck, setPlayer2CardDeck}}/>
        </div>
        <div className="Game">
          <div className='Upper-Deck'>
            <Deck1 props={{player1DeckSize, curPlayers}}/>
          </div>
          <div className='Card-Display'>
            {/* HAVE POOL OF CARDS IN DECK POOL FOR CD, SHOW EVERY OTHER CARD? */}
            <CardDisplay props={{deckDisplay, gameStatus, setGameStatus}}/>
          </div>
          <div className='Lower-Deck'>
            <Deck2 props={{player2DeckSize, curPlayers}}/>
          </div>
        </div>
      </div>
      <div className='Right-Side'>
        <div className='LeaderBoard'>
          <LeaderBoard props={{users,names,userLoading,namesLoading}}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
