import { createContext, useReducer, useEffect, useContext } from "react";

// 1.
const QuizContext = createContext();

const SEC_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "error", // "loading", "error", "ready", "active", "finished"
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
  difficulty: "",
};

function reducer(state, action) {
  const question = state.questions.at(state.index);

  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };

    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highScore: state.highScore,
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    case "setDifficulty":
      return {
        ...state,
        difficulty: action.payload,
      };

    default:
      throw new Error("Action unknown");
  }
}

// 2.
function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    index,
    answer,
    points,
    highScore,
    secondsRemaining,
    difficulty,
  } = state;

  const filteredQuestions =
    difficulty === "easy"
      ? questions.slice(0, 5)
      : difficulty === "medium"
        ? questions.slice(5, 10)
        : difficulty === "hard"
          ? state.questions.slice(10, 15)
          : questions;

  const numQuestions = filteredQuestions.length;
  const maxPossiablePoint = filteredQuestions.reduce(
    (prev, curr) => prev + curr.points,
    0,
  );

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        dispatch,
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        difficulty,
        maxPossiablePoint,
        numQuestions,
        filteredQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;

export function useQuestions() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error("QuizContext is use outside QuizProvider");

  return context;
}
