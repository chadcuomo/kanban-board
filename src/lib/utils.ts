import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { KanbanColumn as ColumnType } from "@/types/kanban";

export const initialColumns: ColumnType[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "task-2",
        title: "Design homepage",
        description: "Create wireframes for the new homepage",
        priority: "high",
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "task-4",
        title: "Develop API endpoints",
        description: "Create endpoints for auth",
        priority: "high",
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    tasks: [
      {
        id: "task-6",
        title: "Code review",
        description: "Review pull requests",
        priority: "medium",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "task-8",
        title: "Fix navigation bug",
        description: "Fix nav bug on mobile",
        priority: "high",
      },
    ],
  },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
