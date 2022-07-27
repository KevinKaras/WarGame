import './CSS/LeaderBoard.css';
import { useEffect, useState } from "react";



function LeaderBoard(props) {

    return (
      <div className='LeaderBoard-Container'>
        <div className='LeaderBoard-Title-Container'>
          <div className='LeaderBoard-Title-Text'>LEADERBOARD</div>
        </div>
        <div className='LeaderBoard-Name-Container'>
          <div className='Leaderboard-Names'>
            { props?.props?.namesLoading && props?.props?.names && 
              <div>
                {[props.props.names]}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
  
  export default LeaderBoard;