import { useContext } from "react";
import Answer from "./Answer"
import { QuizContext } from "../contexts/quiz";
const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    console.log("CurrentQuestion", currentQuestion);
    return(
        <div>
        <div className="question">
            Who is the best players dans le ciel
        </div>
        
        <div className="answers">
            <Answer />
        </div>
        </div>
    );
};

export default Question;