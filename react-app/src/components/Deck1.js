import {useEffect, useState} from 'react'
import CardDisplay from './CardDisplay'
import './CSS/Deck.css'

function Deck1(props) {
  let [cards, setCards] = useState([])
  
  const onLoad = () =>{
    let cardsCol = []
    for(let i = 0; i < props.props.player1DeckSize; i++){
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
  }, [props.props.player1DeckSize])

  return (
    <div className="Deck-Area-Container">
      <div className="Player-Container">
        <div className='Player-Name'>
          {props.props.curPlayers[0]}
        </div>
      </div>
      {props.props.player1DeckSize && 
        <div className='Deck-Area'>
          {[cards]}
        </div>
      }
    </div>
  );
}
  
  export default Deck1;