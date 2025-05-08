import { Droppable, Draggable } from "@hello-pangea/dnd";
import { KanbanCard } from "./KanbanCard";
import type { KanbanColumn as ColumnType } from "@/types/kanban";

import { GripVertical } from "lucide-react";

interface KanbanColumnProps {
  column: ColumnType;
  index: number;
  onDeleteTask: (taskId: string, columnId: string) => void;
}

export function KanbanColumn({
  column,
  index,
  onDeleteTask,
}: KanbanColumnProps) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`bg-muted/40 rounded-lg flex flex-col w-[300px] h-[calc(100vh-12rem)] min-h-[500px] ${
            snapshot.isDragging ? "ring-2 ring-primary/50 shadow-lg" : ""
          }`}
        >
          <div
            className="flex items-center justify-between p-4 border-b border-muted group cursor-grab active:cursor-grabbing"
            {...provided.dragHandleProps}
          >
            <div className="flex items-center gap-2">
              <GripVertical className="h-4 w-4 text-muted-foreground opacity-40 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-medium text-sm">{column.title}</h3>
            </div>
            <div className="bg-muted rounded-full px-2 py-0.5 text-xs font-medium">
              {column.tasks.length}
            </div>
          </div>

          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`flex-1 overflow-y-auto space-y-3 p-4 ${
                  snapshot.isDraggingOver
                    ? "bg-muted/60 ring-2 ring-inset ring-primary/20"
                    : ""
                }`}
              >
                {column.tasks.map((task, index) => (
                  <KanbanCard
                    key={task.id}
                    task={task}
                    index={index}
                    columnId={column.id}
                    onDelete={onDeleteTask}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
