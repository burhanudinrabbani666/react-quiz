import Header from "./components/Header";
import Main from "./components/main";

export default function App() {
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
