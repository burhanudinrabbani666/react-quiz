# MOVING TO THE NEXT QUESTIONS

Moving to next questions is basically update index for searc question

```jsx
case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
```

`/next-question.jsx`

```jsx
function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <div
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </div>
  );
}

export default NextButton;
```

[Next: Displaying progress](./11-displaying-progress.md)
