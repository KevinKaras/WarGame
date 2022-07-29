
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
  let [deck, setDeck] = useState(ShuffledDeck.slice(0,10))
  let [player1DeckSize, setPlayer1DeckSize] = useState(26)
  let [player2DeckSize, setPlayer2DeckSize] = useState(26)
  let [player1CardDeck, setPlayer1CardDeck] = useState([])
  let [player2CardDeck, setPlayer2CardDeck] = useState([])
  let [gameStatus, setGameStatus] = useState(false)
  let [finished, setFinished] = useState(false)
  let [warStatus, setWarStatus] = useState(false)
  let [deckDisplay, setDeckDisplay] = useState([])
  let [winner, setWinner] = useState('')

  

  const onLoad = async () => {
    let response = await fetch('/api/')
    let res = await response.json()
    setUsers(res.score)
    setUserLoading(false)
    let sorted = res.score.sort((a,b) => b.wins - a.wins)
    let usersJSX = sorted.map((user) =>{
      return (
              <div key={user.id} className="UserContainer">
                <div className="User-Name">{user.name}</div>
                <div className="User-Wins">{user.wins}</div>
              </div>
             )
    })
    setNames(usersJSX)
  }

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
    setPlayer1DeckSize(5)
    setPlayer2CardDeck(deck2)
    setPlayer2DeckSize(5)
    setFinished(false)
    setWarStatus(false)
    setWinner('')
    setGameStatus(true)
  }

  const RestartGame = async () => {
    let deck1 = deck.slice(0, deck.length/2)
    let deck2 = deck.slice(deck.length/2)

    setPlayer1CardDeck(deck1)
    setPlayer1DeckSize(5)
    setPlayer2CardDeck(deck2)
    setPlayer2DeckSize(5)
    setFinished(false)
    setWarStatus(false)
    setWinner('')
    setGameStatus(true)
    setCurPlayers([])
  }

  const ChangeCardAmt = async () => {
    if(player1DeckSize <= 5 && player2DeckSize <= 5){
      setPlayer1DeckSize(26)
      setPlayer2DeckSize(26)
    } else {
      setPlayer1DeckSize(5)
      setPlayer2DeckSize(5)
    }
  }
  

  useEffect(()=>{
    onLoad()
  }, [deckDisplay, finished, curPlayers])
  // Finished -> Names

  return (
    <div className="App">
      {finished && 
        <div className="Winning-Screen">
          <div className='Congratulations-Container'>
            <div className='Congratulations'>{`PLAYER ${winner} WON!`}</div>
            <div className='Restart-Button-Container'>
              <button className='Restart-Button' onClick={RestartGame}>
                Restart
              </button>
            </div>
            <div className='For-Fun'>loser has to drink a shot</div>
          </div>
        </div>
      }
      { !finished &&
        <>
          <div className='Left-Side'>
            <div className='User-Bar'>
              <SignUp props={{onLoad, setCurPlayers, setGameStatus, deck, setPlayer1CardDeck, setPlayer2CardDeck, StartGame}}/>
            </div>
            <div className='Change-Card-Amount-Container'>
              <button className='Change-Card-Amount' onclick={ChangeCardAmt}>Change Card Amount</button>
            </div>
          <div className="Game">
            <div className='Upper-Deck'>
              <Deck1 props={{player1DeckSize, curPlayers}}/>
            </div>
            <div className='Card-Display'>
              <CardDisplay props={{
                deckDisplay, 
                gameStatus, 
                setGameStatus, 
                DealHand, 
                setDeckDisplay, 
                setPlayer1CardDeck,
                player1DeckSize,
                setPlayer2CardDeck, 
                player2DeckSize,
                setWinner,
                curPlayers,
                setFinished}}/>
            </div>
            <div className='Lower-Deck'>
             <Deck2 props={{player2DeckSize, curPlayers}}/>
            </div>
          </div>
      </div>
      <div className='Right-Side'>
        <div className='LeaderBoard'>
          <LeaderBoard props={{users,names,userLoading,namesLoading, setNames}}/>
        </div>
      </div>
        </>
      }
      
      
    </div>
  );
}

export default App;
