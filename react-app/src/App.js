
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
  let [namesLoading, setNamesLoading] = useState(true)
  let [deck, setDeck] = useState(ShuffledDeck)
  let [player1DeckSize, setPlayer1DeckSize] = useState(26)
  let [player2DeckSize, setPlayer2DeckSize] = useState(26)
  let [gameStatus, setGameStatus] = useState(false)

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
  }, [])

  return (
    <div className="App">
      <div className='Left-Side'>
        <div className='User-Bar'>
          <SignUp props={onLoad}/>
        </div>
        <div className="Game">
          <div className='Upper-Deck'>
            <Deck1 props={player1DeckSize}/>
          </div>
          <div className='Card-Display'>
            <CardDisplay />
          </div>
          <div className='Lower-Deck'>
            <Deck2 props={player2DeckSize}/>
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
