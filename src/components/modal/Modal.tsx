// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import "./style.css";
import useGame from "../../stores/useGame";
import { clearLocalStorage } from "../../stores/utils";

const Modal = () => {
  const { resetCards, resetCoins } = useGame();

  const { setModal } = useGame();

  const handleClear = () => {
    clearLocalStorage();
    resetCards();
    resetCoins();
  };

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
            Currency Factor for SCRATCH & WIN- STARPOINTS. 
We pay a  STARPOINTS for qualified “screen outs” (user gets redirected to a game , starts it but does not qualify to some reason) and game ratings (user gives his rating after a successful game complete). To know which reward we have to display the user in STARPOINTS electronic currency. the value based on the ration of PHP from ECHOZONE FREE GAMES CALCULATOR. Example: If user earned STARPOINTS and 1000 STARPOINTS have a value of 1php on our game settings (dont expect this result, because it is a example only not a exact format) default settings would set the echozone free games calculator. so that the user gets exact money base from ECHOZONE FREE GAMES CALCULATOR 
            
          </div>
          <div className="modal-text">Scratch your way to great prizes!</div>
          <div className="modal-button" onClick={handleClear}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
