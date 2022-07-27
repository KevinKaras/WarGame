import "./CSS/CardDisplay.css"
import { useEffect, useState } from 'react';


function CardDisplay({props}) {

  let [curCards, setCurCards] = useState([])

  const onLoad = () =>{
    if(props.player1DeckSize === 0){
      let response = fetch(`http://127.0.0.1:5000/win/${props.curPlayers[1][1]}`)

      props.setFinished(true)
      props.setWinner(props.curPlayers[1][0])
      props.setGameStatus(state => !state)
      props.setDeckDisplay([])
      return
    } else if (props.player2DeckSize === 0){

      let response = fetch(`http://127.0.0.1:5000/win/${props.curPlayers[0][1]}`)

      props.setFinished(true)
      props.setWinner(props.curPlayers[0][0])
      props.setGameStatus(state => !state)
      props.setDeckDisplay([])
      return
    }

    if(props.deckDisplay.length === undefined){
      return
    }
    let cards =props.deckDisplay.map((card) =>{
        return (
                <div key={card.ID} className="Card-Face">
                  <div className="Card-Top">
                    <div className="Card-Suit">{card.Suit}</div>
                    <div className="Card-Value">{card.ID}</div>
                  </div>
                  <div className="Card-Middle">
                      <div className="">
                      </div>
                  </div>
                  <div className="Card-Bottom">
                    <div className="Card-Value">{card.ID}</div>
                    <div className="Card-Suit">{card.Suit}</div>
                  </div>
                </div>
               )
      })
      setCurCards(cards)
      props.setFinished(false)
  }



  useEffect(()=>{
    onLoad()
  }, [props.deckDisplay]) 


  return (
    <div className='Card-Display-Container'>
      <div className="Card-Display-SubContainer-Left">
        <div className="Card-Display">
          <div className="Cards">
            {[curCards]}
          </div>
        </div>
      </div>
      <div className="Card-Display-SubContainer-Right">
        <div className='Next-Play-Button-Container'>
          { props.gameStatus && 
            <button className='Next-Play-Button' onClick={props.DealHand}>
              Deal Hand
            </button>
          }
          
        </div>
      </div>
      
      
    </div>
  );
}
  
export default CardDisplay;