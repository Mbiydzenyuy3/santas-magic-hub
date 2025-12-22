export type HolidayTask = {
  id: number;
  text: string;
  completed: boolean;
};

export const initialTasks: HolidayTask[] = [
  { id: 1, text: "Buy Christmas gifts", completed: false },
  { id: 2, text: "Decorate the tree", completed: false },
  { id: 3, text: "Bake cookies", completed: false }
];
