import React from 'react';
import '../App.css';

const HelpMessage = ({handleHelp}) => {

    return (
        <div>
            <div className="Help__message">
                <h3>Instructions:<br /></h3>
                <p>Welcome to the epic battle where the greatest heroes of all times test their skills in an ultimate showdown.</p>
                <p>At first: Click the "New Game" button in the upper right corner to start the game and let the battle begin. </p>
                <p>The gameplay works just like "Auto Quartet" or "Top Trumps" if you know these:</p>         
                <p>You choose an attribute of your character card and it is compared with the corresponding attribute on your opponent's character card, your opponent's card is face down so you have to choose cleverly and also trust your fate.</p>
                <p>If your character is stronger, you get your opponent's card, if your character is weaker, your opponent gets your card.</p>
                <p>You win when your opponent has no cards left.</p>
                <p>Now venture into battle, honour and glory await you.</p>       
                <button className="Help__close" onClick={handleHelp}>Close</button>
            </div>            
        </div>
)}

export default HelpMessage;