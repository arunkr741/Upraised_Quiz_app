import { atom } from "recoil";


export const Quizdata = atom({
  key: "quizId",
  default: "", 
});

export const QuestionData = atom({
  key: "questionData",
  default: null, 
});
