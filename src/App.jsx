import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/start";
import Questions from "./components/questions";

const initialState = {
  question: [],
  status: "error", // "loading", "error", "ready", "active", "finished"
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        question: action.payload,
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

    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { question, status } = state;
  const numQuestions = question.length;

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div>
      <div className="app">
        <Header />

        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && <Questions />}
        </Main>
      </div>
    </div>
  );
}
