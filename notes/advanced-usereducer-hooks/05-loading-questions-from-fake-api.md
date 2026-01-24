# LOADING FROM FAKE API

Installing `json-server` for make fake api.

```bash
bun install json-server
```

```json
{
  // .................
  "server": "json-server --watch data/questions.json --port 4000"
  //............
}
```

and after fetch to fake api for geting data

```jsx
const [state, dispatch] = useReducer(reducer, initialState);

useEffect(() => {
  fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((data) => dispatch({ type: "dataReceived", payload: data }))
    .catch(() => dispatch({ type: "dataFailed" }));
}, []);
```

[Next: Handling loading error and read](./06--handling-loading-error-and-read.md)
