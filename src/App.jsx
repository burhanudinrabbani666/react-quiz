import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/main";

const initialState = {
  question: [],
  status: "loading", // "loading", "error", "ready", "active", "finished"
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
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
          <p>1/15</p>
          <p>Question</p>
        </Main>
      </div>
    </div>
  );
}
