import { Quiz, QuestionType } from "./../Types/data_types";

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const getQuizData = async (
  total: number,
  level: string
): Promise<QuestionType[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${total}&difficulty=${level}&type=multiple`
  );
  let { results } = await res.json();
  const quiz: QuestionType[] = results.map((obj: Quiz) => {
    return {
      question: obj.question,
      answer: obj.correct_answer,
      correct_answer: obj.correct_answer,
      option: shuffleArray(obj.incorrect_answers.concat(obj.correct_answer)),
    };
  });
  return quiz;
};
