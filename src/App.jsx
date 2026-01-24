import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Loader from "./components/helper/Loader.jsx";
import Error from "./components/helper/Error.jsx";
import StartScreen from "./components/start";
import Questions from "./components/questions/questions.jsx";
import NextButton from "./components/button/next-questions.jsx";
import Progress from "./components/questions/progress.jsx";
import FinishScreen from "./components/finish-screen.jsx";

const initialState = {
  questions: [],
  status: "error", // "loading", "error", "ready", "active", "finished"
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
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
        status: "finish",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points, highScore } = state;
  const numQuestions = questions.length;
  const maxPossiablePoint = questions.reduce(
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
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestion={numQuestions}
              points={points}
              maxPossiablePoint={maxPossiablePoint}
              answer={answer}
            />
            <Questions
              dispatch={dispatch}
              answer={answer}
              question={questions[index]}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestion={numQuestions}
            />
          </>
        )}

        {status === "finish" && (
          <FinishScreen
            points={points}
            maxPossiablePoint={maxPossiablePoint}
            highScore={highScore}
          />
        )}
      </Main>
    </div>
  );
}
