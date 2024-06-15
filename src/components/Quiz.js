import React, {useContext} from "react";
import Question from "./Question"
import { QuizContext } from "../contexts/quiz";


const Quiz =() => {
    
    const [dispatch] = useContext(QuizContext);

    const testClick = () => {
        dispatch({type:"NEXT_QUESTION"})
    };
    
    
    
    return(
        <div className="quiz">
            <div>
                <div className="score">Question 1/8</div>
            <Question />
            </div>
            <div className="next-button" onClick={testClick} >Next Question</div>

        </div>
    );
};

export default Quiz;