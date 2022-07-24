import './CSS/SignUp.css'
import { useEffect, useState } from "react";
function SignUp() {

    let [name1, setName1] = useState('')
    let [name2, setName2] = useState('')


    const onCreate = async (event) => {
        event.preventDefault()

        let formData = new FormData()

        formData.append(name1)
        formData.append(name2)

        let response = await fetch("/signup", {
            method: "POST",
            body: formData
        })
        
    }

    return (
        <div className="Sign-Up-Container">
            <form className="Player-Name-Form" onSubmit={onCreate}>
                <div className="Player-1-Input">
                    <input 
                    className="Player-1-Name"
                    type="text"
                    name="name"
                    placeholder="Player 1 Name"
                    onChange={(e) => setName1(e.target.value)}
                    ></input>
                </div>
                <div className="Player-2-Input">
                    <input 
                    className="Player-2-Name"
                    type="text"
                    name="name"
                    placeholder="Player 1 Name"
                    onChange={(e) => setName2(e.target.value)}
                    ></input>
                </div>
                <div className="Button-Container">
                    <button className="Sign-Up-Button">Start Game</button>
                </div>
            </form>
            
        </div>
    );
  }
  
  export default SignUp;