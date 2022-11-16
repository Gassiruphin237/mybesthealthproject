import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import '../styles/RegistrationStyle.css'

const StepBar = (props) => {

    return (
        <>
            <ProgressBar
            percent={((props.step-1)*100) / 2}
            filledBackground="linear-gradient(to right, rgb(3, 248, 36), rgb(1, 48, 7))"
            >
                <Step transition="scale">
                    {({ accomplished, index }) => (
                        <div className={`step ${accomplished ? "completed" : ""}`}>    
                            1
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, index }) => (
                        <div className={`step ${accomplished ? "completed" : ""}`}>
                            2
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, index }) => (
                        <div className={`step ${accomplished ? "completed" : ""}`}>
                            3
                        </div>
                    )}
                </Step>
            </ProgressBar>
        </>
    );
}

export default StepBar;