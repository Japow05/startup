import React from 'react';
import './play.css'

export function Play() {
    return (
        <main className="bg-primary-subtle text-primary-emphasis">
            <div className="players">
                Player:
                <span className="player-name">Anonymous Player</span>
                <div id="player-messages">
                    <div className="event"><span className="player-event">Player 1</span> has completed the 3x5 board in 0:35.65</div>
                    <div className="event"><span className="player-event">Player 2</span> has completed the 5x5 board in 1:01.42</div>
                </div>
                </div>
            <div className="container-fluid text-center">
                <label for="timer">Time</label>
                <span id="timer">00:00.00</span>
                <select name="Difficulties">
                    <option value="2x5grid">2x5 Grid</option>
                    <option value="3x5grid">3x5 Grid</option>
                    <option value="4x5grid">4x5 Grid</option>
                    <option value="5x5grid">5x5 Grid</option>
                </select>
                <button className="btn btn-primary">New Game</button>
            </div>

            <br/>

            <div className="game">
                <table className="game-table">
                    <tr>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                        <td>
                            <button className="game-button">
                            </button>
                        </td>
                    </tr>
                </table>
            </div>


        </main>
    )
}