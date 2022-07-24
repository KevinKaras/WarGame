import './CSS/SignUp.css'

function SignUp() {



    return (
        <div className="Sign-Up-Container">
            <form className="Player-Name-Form">
                <div className="Player-1-Input">
                    <input className="Player-1-Name"></input>
                </div>
                <div className="Player-2-Input">
                    <input className="Player-2-Name"></input>
                </div>
                <div className="Button-Container">
                    <button className="Sign-Up-Button">Start Game</button>
                </div>
            </form>
            
        </div>
    );
  }
  
  export default SignUp;