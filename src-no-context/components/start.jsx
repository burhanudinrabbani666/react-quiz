function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} Questions to testing your react mastery</h3>

      <div className="start-btn-container">
        <button
          className="btn btn--ui"
          onClick={() => dispatch({ type: "start" })}
        >
          Let's Start
        </button>

        <select
          onChange={(event) =>
            dispatch({ type: "setDifficulty", payload: event.target.value })
          }
        >
          <option value="">Difficulty</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>
    </div>
  );
}

export default StartScreen;
