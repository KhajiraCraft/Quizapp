import {createContext,useReducer} from 'react'
import questions from '../data'

const initialState = {
    currentQuestionIndex: 0,
    questions: [],
    
};

const reducer = (state,action) => {
    if (action.type === "NEXT_QUESTION"){
        // const currentQuestionIndex = state.currentQuestionIndex + 1
        console.log("Hellllo")

    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer,initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}