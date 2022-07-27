
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

  // Create Function Start Game
  // - Splits deck in 2
  // - update Deck1 for P1, update Deck2 for P2
  // v|

  // Create function Deal Hand
  // - Has both players deck
  // if(DeckDisplay.length === 0)
    // - pops() top card from player1Deck, player2Deck = [p1card1, p2card2]
    // - setDeckDisplay(p1card1, p2card2)
    // - return
  // if(DeckDisplay.length > 0)
    // if(DeckDisplay[0].value > DeckDisplay[1].value )
      // - setPlayer1Card(state => [...state, ...DeckDisplay])
    // if(DeckDisplay[0].value < DeckDisplay[1].value )
      // - setPlayer2Card(state => [...state, ...DeckDisplay])
  // - pops() top card from player1Deck, player2Deck = [p1card1, p2card2]
  // - setDeckDisplay(p1card1, p2card2)


  const DealHand = async () => {
    if(deckDisplay.length === 0){
      let p1Card1 = player1CardDeck.slice(0,1)[0]
      let p2Card2 = player2CardDeck.slice(0,1)[0]
      setPlayer1CardDeck(player1CardDeck.slice(1))
      setPlayer2CardDeck(player2CardDeck.slice(1))
      setPlayer1DeckSize(state => state -= 1)
      setPlayer2DeckSize(state => state -= 1)

      setDeckDisplay([p1Card1, p2Card2])
      return
    }
    if(deckDisplay.length > 0 && !warStatus){
      
      if(deckDisplay[deckDisplay.length-2].Value > deckDisplay[deckDisplay.length-1].Value){
        setPlayer1CardDeck(state => [...state, ...deckDisplay])
        setPlayer1DeckSize(state => state += deckDisplay.length)
        setDeckDisplay([])
        setWarStatus(false)
      }
      if(deckDisplay[deckDisplay.length-2].Value < deckDisplay[deckDisplay.length-1].Value){
        setPlayer2CardDeck(state => [...state, ...deckDisplay])
        setPlayer2DeckSize(state => state += deckDisplay.length)
        setDeckDisplay([])
        setWarStatus(false)
      }
      if(deckDisplay[deckDisplay.length-2].Value === deckDisplay[deckDisplay.length-1].Value){
        setWarStatus(true)
      }
    }

    if(deckDisplay.length > 0 && warStatus){
      let p1Card1 = player1CardDeck.slice(0,2)                        // [p1Card1, p1Card2]
      let p2Card2 = player2CardDeck.slice(0,2)                        // [p2Card1, p2Card2]
      setPlayer1CardDeck(player1CardDeck.slice(2))
      setPlayer2CardDeck(player2CardDeck.slice(2))
      setPlayer1DeckSize(state => state -= 2)
      setPlayer2DeckSize(state => state -= 2)

      setDeckDisplay(state => [...state, ...p1Card1, ...p2Card2])     //  [card1, card2]  => [card1, card2, p1Card1, p1Card2, p2Card1, p2Card2]
      setWarStatus(false)
    }

    
  }


  const StartGame = async () => {
    let deck1 = deck.slice(0, deck.length/2)
    let deck2 = deck.slice(deck.length/2)

    setPlayer1CardDeck(deck1)
    setPlayer2CardDeck(deck2)
  }
  

  useEffect(()=>{
    onLoad()
  }, [deckDisplay])

  return (
    <div className="App">
      <div className='Left-Side'>
        <div className='User-Bar'>
          <SignUp props={{onLoad, setCurPlayers, setGameStatus, deck, setPlayer1CardDeck, setPlayer2CardDeck, StartGame}}/>
        </div>
        <div className="Game">
          <div className='Upper-Deck'>
            <Deck1 props={{player1DeckSize, curPlayers}}/>
          </div>
          <div className='Card-Display'>
            {/* HAVE POOL OF CARDS IN DECK POOL FOR CD, SHOW EVERY OTHER CARD? */}
            <CardDisplay props={{deckDisplay, gameStatus, setGameStatus, DealHand, setDeckDisplay, setPlayer1CardDeck, setPlayer2CardDeck}}/>
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
