import './CSS/SignUp.css'
import { useEffect, useState } from "react";
function SignUp({props}) {

    let [name1, setName1] = useState('Player 1 Name')
    let [name2, setName2] = useState('Player 2 Name')
    // let [winAmt, setWinAmt] = useState('')
    let [signedUpState, setSignedUpState] = useState(false)

    const onCreate = async (event) => {
        event.preventDefault()
        let formData = new FormData()

        formData.append("name1", name1)
        formData.append("name2", name2)

        let response = await fetch("/api/signup", {
            method: "POST",
            body: formData
        })

        let res = await response.json()
        setSignedUpState(true)
        props.onLoad()
        props.setCurPlayers([[res.Scores[0].name, res.Scores[0].id], [res.Scores[1].name,res.Scores[1].id]])
        props.setGameStatus(state => !state)
        props.StartGame()
    }
    useEffect(()=> {

    }, [])

    return (
        <div>
        { !signedUpState &&
            <div className="Sign-Up-Container">
                <form className="Player-Name-Form" onSubmit={onCreate}>
                    <div className="Player-1-Input">
                        <input 
                        className="Player-1-Name"
                        type="text"
                        name="name"
                        placeholder={name1}
                        onChange={(e) => setName1(e.target.value)}
                        ></input>
                    </div>
                    <div className="Player-2-Input">
                        <input 
                        className="Player-2-Name"
                        type="text"
                        name="name"
                        placeholder={name2}
                        onChange={(e) => setName2(e.target.value)}
                        ></input>
                    </div>
                    <div className="Button-Container">
                        <button className="Sign-Up-Button" type="Submit">Start Game</button>
                    </div>
                </form>
                
            </div>
        }
        { signedUpState && 
            <div className="Current-Players">
                <div className="Player-1-Display">
                    <div className='Player-1-Display-Name'>{name1}</div>
                </div>
                <div className="Player-2-Display">
                    <div className='Player-2-Display-Name'>{name2}</div>   
                </div>
            </div>
        }
        </div>
        
    );
  }
  
  export default SignUp;