import { useQuestions } from "../../context/QuizProvider";
import Options from "./option";

function Questions() {
  const { filteredQuestions, index } = useQuestions();
  const question = filteredQuestions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Questions;
