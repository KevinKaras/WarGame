import {useEffect, useState} from 'react'
import CardDisplay from './CardDisplay'
import './CSS/Deck.css'

function Deck1({props}) {
  let [cards, setCards] = useState([])
  
  const onLoad = () =>{
    let cardsCol = []
    for(let i = 0; i < props.player1DeckSize; i++){
      cardsCol.push(
        (<div className='Card-Container'>
          <div className='Card-Square'></div>
        </div>)
      )
    }
    setCards(cardsCol)
  }

  useEffect(()=>{
    onLoad()
  }, [props.player1DeckSize, props.curPlayers])

  return (
    <div className="Deck-Area-Container">
      <div className="Player-Container">
        {props?.curPlayers[0] &&
        <div className='Player-Name'>
          {`${props.curPlayers[0][0]}`}
        </div>
        }
      </div>
      {props.player1DeckSize && 
        <div className='Deck-Area'>
          {[cards]}
        </div>
      }
    </div>
  );
}
  
  export default Deck1;