import "./App.scss";
import StepProgress from "./stepProgress/StepProgress";
import React, { Component } from "react";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            currentStep: 1
        };
    }

    handleClick(clickType) {
        const { currentStep } = this.state;
        let newStep = currentStep;
        clickType === "next" ? newStep++ : newStep--;

        if (newStep > 0 && newStep <= 5) {
            this.setState({
                currentStep: newStep
            });
        }
    }

    render() {
        const { currentStep } = this.state;

        return (
            <>
                <div className="step-container-horizontal">
                    <StepProgress
                        direction="horizontal"
                        currentStepNumber={currentStep - 1}
                        steps={stepsArray}
                        stepColor="blue"
                    />
                </div>

                <div className="buttons-container">
                    <button onClick={() => this.handleClick()}>Previous</button>
                    <button onClick={() => this.handleClick("next")}>Next</button>
                </div>
            </>
        );
    }
}

const stepsArray = [
    "Design",
    "Build",
    "Test",
    "Launch"
];



