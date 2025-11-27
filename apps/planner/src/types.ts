export interface Ingredient {
  name: string;
  amount: string;
}

export interface Meal {
  id: number;
  name: string;
  ingredients: Ingredient[];
}

export interface WeekDay {
  day: string;
  breakfast: number | null;
  lunch: number | null;
  dinner: number | null;
}