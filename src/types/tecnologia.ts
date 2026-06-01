type Category =
  | "Backend"
  | "Frontend"
  | "Database"
  | "Tools & Cloud"
  | "Mobile";

type Level = 1 | 2 | 3 | 4 | 5;

interface Technology {
  id: string;
  name: string;
  icon: string;
  category: Category;
  level: Level;
  color: string;
  description: string;
  position: { x: number; y: number };
}

export type { Category, Level };
export type { Technology };
