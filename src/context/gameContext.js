import { Component, createContext } from "react";

export const GameContext = createContext();



export class GameContextProvider extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showEndgame: false,
            ties: 0,
            userName1: "Player1",
            userName2: "Player2",
            winner: "",
            player1: 0,
            player2: 0,
            showLogin: true,
        }
    }
    // Event handlers
    handleEndgame(inp) {
        this.setState({
            showEndgame: inp
        });
    }
    handleName(player1, player2) {
        this.setState({
            userName1: player1,
            userName2: player2,
            showLogin: false
        })
    }
    handleScore(player) {
        const { userName1, userName2 } = this.state;
        let winner;
        if (player === "player1") {
            winner = userName1
        } else if (player === "player2") {
            winner = userName2
        } else {
            winner = "Tied";
        }
        this.setState({
            [player]: this.state[player] + 1,
            winner: winner
        })
    }
    render() {
        const {
            player1,
            player2,
            userName1,
            userName2,
            showLogin,
            winner
        } = this.state;
        return (
            <GameContext.Provider value={{
                showEndgame: this.state.showEndgame,
                handleEndgame: this.handleEndgame.bind(this),
                handleName: this.handleName.bind(this),
                handleScore: this.handleScore.bind(this),
                userName1: userName1,
                userName2: userName2,
                player1: player1,
                player2: player2,
                winner: winner,
                showLogin: showLogin
            }}>
                {this.props.children}
            </GameContext.Provider>
        )
    }
}

export default GameContextProvider;
