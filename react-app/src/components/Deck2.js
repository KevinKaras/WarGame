import {useEffect, useState} from 'react'
import CardDisplay from './CardDisplay'
import './CSS/Deck.css'

function Deck2(props) {
  let [cards, setCards] = useState([])
  const onLoad = () =>{
    let cardsCol = []
    for(let i = 0; i < props.props.player2DeckSize; i++){
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
  }, [])

  return (
    <div className="Deck-Area-Container">
      <div className="Player-Container">
        <div className='Player-Name'>
          {props.props.curPlayers[1]}
        </div>
      </div>
      {props.props.player2DeckSize && 
        <div className='Deck-Area'>
          {[cards]}
        </div>
      }
    </div>
  );
}
  export default Deck2;