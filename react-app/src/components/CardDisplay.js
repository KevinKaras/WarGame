import "./CSS/CardDisplay.css"
import { useEffect, useState } from 'react';


function CardDisplay(props) {

  let [curCards, setCurCards] = useState([])
  
  console.log("FIRST RENDER OF PROPS", props)
  
  const onLoad = () =>{
    if(props.props.deckDisplay.length === undefined){
      return
    }
    let cards = props.props.deckDisplay.map((card) =>{
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
      console.log("CARDS AFTER WORK", cards)
      setCurCards(state => [...state, cards])
  }


  useEffect(()=>{
    onLoad()
  }, [props.props.deckDisplay]) 


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
          <button className='Next-Play-Button' onClick={props.props.nextPlay}>
            Next Play
          </button>
        </div>
      </div>
      
      
    </div>
  );
}
  
export default CardDisplay;