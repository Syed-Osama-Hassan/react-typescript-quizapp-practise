import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizData } from './services/quiz_service';
import { QuestionType } from './Types/data_types';
import QuestionCard from './components/QuestionCard';

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [submit, setSubmit] = useState(false);

  useEffect(() => {
    async function fetchData(){
      const questions: QuestionType[] = await getQuizData(5, 'easy');
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
  }, [submit]);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) =>{
    e.preventDefault();
    
    const currentQuestion: QuestionType = quiz[currentStep];
    
    if(userAns === currentQuestion.correct_answer){
      setScore(++score);
    }

    if(currentStep !== quiz.length-1){
      setCurrentStep(++currentStep);
      setSubmit(false);
    }
      
    else{
      setCurrentStep(0);
      setSubmit(true);
    }
  }

  if(!quiz.length){
    return <h3>Loading...</h3>
  }

  if(submit){
    return (<div className="quiz-container result-container">
      <h2>Result</h2>
      <p className="result">Your score: <b>{score}</b> / <b>{quiz.length}</b></p>
    </div>)
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuestionCard
        options = { quiz[currentStep].option}
        question = { quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
