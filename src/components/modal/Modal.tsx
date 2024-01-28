// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import "./style.css";
import useGame from "../../stores/useGame";



  return (
    <div className="modal" onClick={() => setModal(false)}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">HOW TO PLAY</div>
        <div className="modal-main">
          <div className="modal-text">
            Players need to virtually ‘scratch-off’ the designated areas to
            uncover the rewards.
          </div>
          <div className="modal-text">
            If you are on your phone, touch one of the areas and simply move
            your finger to scratch.
          </div>
          <div className="modal-text">
            If you are on your computer, click on one of the areas and move your
            mouse around.
          </div>
          <div className="modal-text">
            Currency Factor for SCRATCH TO EARN. 
We pay a  COINS for qualified “screen outs” (user gets redirected to a game , starts it but does not qualify to some reason) and game ratings (user gives his rating after a successful game complete). To know which reward we have to display the user in USD currency. the value based on the ration of 1 USD. Example: If user earned Coins and 1000 Coins have a value of 1 USD on our game settings , default settings would set the bonus factor to 1 USD = 1000 (Coins), so that the user gets 10 Coins for a 0.01 USD.
            
          </div>
          <div className="modal-text">Scratch your way to great prizes!</div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
