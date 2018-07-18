import React, { Component } from "react";
import PikachuCard from "./components/PikachuCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import pikachu from "./pikachu.json";

//Setting the state
class App extends Component {
    state = {
        pikachu,
        score: 0,
        topScore: 0,
        message: 'Goal: Click the pikachu image only 1x - start by clicking!'
    };

    //A randomize/shuffle array function implemented from stackoverflow    
    shufflePikachu = (pikachuArray) => {
        for (let i = pikachuArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pikachuArray[i], pikachuArray[j]] = [pikachuArray[j], pikachuArray[i]];
        }
        return pikachuArray;
    }

    //Creating a new array from the initial pikachu array and changing the click value to true to account for those images that have been clicked. 
    handleClick = id => {
        const pikachu = this.state.pikachu.filter(pikachus => pikachus.id === id);
        if (!pikachu[0].click) {
            pikachu[0].click = true;
            const newScore = this.state.score + 1;
            let sentMessage = "Good memory! Pick again";
            this.setState({ message: sentMessage });
            this.setState({ score: newScore });
            if (newScore === this.state.pikachu.length) {
                sentMessage = "You did it! You beat the game!";
                this.setState({ message: sentMessage });
            }
            //Updating the top score if it is greater than the previous attempts
            if (newScore >= this.state.topScore) {
                this.setState({ topScore: newScore });
            }

        } else {
            this.setState({ score: 0, message: "Sorry, you picked that one already! Click to start again!" });
            //reseting the game and setting click back to false 
            const resetCards = this.state.pikachu.slice();
            resetCards.forEach((pikachu) => {
                pikachu.click = false;
            });
            this.setState({ pikachu: resetCards });
        }
        const pikachuArray = this.shufflePikachu(this.state.pikachu.slice());
        this.setState({ pikachu: pikachuArray });
    };

    render() {
        return (
            <div>
                <Navbar
                    message={this.state.message}
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Wrapper>
                    {this.state.pikachu.map(pikachus => (
                        <PikachuCard
                            handleClick={this.handleClick}
                            id={pikachus.id}
                            key={pikachus.id}
                            src={pikachus.src}
                            click={pikachus.click}
                        />
                    ))}
                </Wrapper>
                <Footer />
            </div>
        );
    }
}

export default App;


