# RESTARING QUIZ

adding new button in finish componets and add type reducer

```jsx
    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
      };
```

`/finish-screen.jsx`

```jsx
<button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
  Restart quiz
</button>
```

[Next: setting-up-timer-with-use-effect](./14-setting-up-timer-with-use-effect.md)
