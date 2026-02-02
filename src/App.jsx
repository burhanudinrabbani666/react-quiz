import Header from "./components/Header";
import Main from "./components/main";
import Loader from "./components/helper/Loader.jsx";
import Error from "./components/helper/Error.jsx";
import StartScreen from "./components/start";
import Questions from "./components/questions/questions.jsx";
import NextButton from "./components/button/next-questions.jsx";
import Progress from "./components/questions/progress.jsx";
import FinishScreen from "./components/finish-screen.jsx";
import Timer from "./components/timer.jsx";
import Footer from "./components/footer.jsx";
import { useQuestions } from "./context/QuizProvider.jsx";

export default function App() {
  const { status } = useQuestions();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Questions />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
