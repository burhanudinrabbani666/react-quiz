# HANDLING NEW ANSWER

`options.jsx`

```jsx
function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
```

`App.jsx`

```jsx
const initialState = {
  questions: [],
  status: "error", // "loading", "error", "ready", "active", "finished"
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  const question = state.questions.at(state.index);

  switch (action.type) {
    //..................
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    // .................
  }
}
```

[Next: Moving to the next quetions](./10-moving-to-the-next-quetions.md)
