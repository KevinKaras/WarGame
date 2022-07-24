
import './App.css';
import Deck1 from './components/Deck1';
import Deck2 from './components/Deck2';
import CardDisplay from './components/CardDisplay';
import LeaderBoard from './components/LeaderBoard';
import SignUp from './components/SignUp';

function App() {
    



  return (
    <div className="App">
      <div className='Left-Side'>
        <div className='User-Bar'>
          <SignUp />
        </div>
        <div className="Game">
          <div className='Upper-Deck'>
            <Deck1 />
          </div>
          <div className='Card-Display'>
            <CardDisplay />
          </div>
          <div className='Lower-Deck'>
            <Deck2 />
          </div>
        </div>
      </div>
      <div className='Right-Side'>
        <div className='LeaderBoard'>
          <LeaderBoard />
        </div>
      </div>
      
    </div>
  );
}

export default App;
