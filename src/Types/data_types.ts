import React from "react";

export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionType = {
  answer: string;
  question: string;
  option: string[];
  correct_answer: string;
};

export type questionPropsType = {
  question: string;
  options: string[];
  callback: (e: React.FormEvent<EventTarget>, ans: string) => void;
};
