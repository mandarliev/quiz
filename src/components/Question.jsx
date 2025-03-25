import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
    </div>
  );
};

export default Question;
