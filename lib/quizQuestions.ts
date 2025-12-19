export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What is Santa’s sleigh pulled by?",
    options: ["Horses", "Reindeer", "Elves", "Penguins"],
    correctIndex: 1
  },
  {
    question: "Which country started the Christmas tree tradition?",
    options: ["USA", "Germany", "France", "Norway"],
    correctIndex: 1
  },
  {
    question: "What do people traditionally put on top of a Christmas tree?",
    options: ["Star", "Bell", "Candy Cane", "Ribbon"],
    correctIndex: 0
  },
  {
    question: "What month is Christmas celebrated?",
    options: ["November", "December", "January", "October"],
    correctIndex: 1
  }
];
