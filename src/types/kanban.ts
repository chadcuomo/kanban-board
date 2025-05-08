export interface KanbanTask {
  id: string;
  title: string;
  description: string;
  priority: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  tasks: KanbanTask[];
}
