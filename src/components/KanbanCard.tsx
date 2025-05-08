import { Draggable } from "@hello-pangea/dnd";
import type { KanbanTask } from "@/types/kanban";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GripHorizontal, Trash2 } from "lucide-react";

interface KanbanCardProps {
  task: KanbanTask;
  index: number;
  columnId: string;
  onDelete: (taskId: string, columnId: string) => void;
}

export function KanbanCard({
  task,
  index,
  columnId,
  onDelete,
}: KanbanCardProps) {
  const priorityColors = {
    low: "bg-green-100 text-green-800 hover:bg-green-100",
    medium: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    high: "bg-red-100 text-red-800 hover:bg-red-100",
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`transition-all duration-200 group/card ${
            snapshot.isDragging ? "z-50 rotate-1 scale-105" : ""
          }`}
        >
          <Card
            className={`shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing ${
              snapshot.isDragging ? "border-primary/50 shadow-lg" : ""
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium">{task.title}</h4>
                <GripHorizontal className="h-4 w-4 text-muted-foreground opacity-40 group-hover/card:opacity-100 transition-opacity flex-shrink-0 mt-1 ml-2" />
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {task.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <Badge
                variant="secondary"
                className={
                  priorityColors[task.priority as keyof typeof priorityColors]
                }
              >
                {task.priority}
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(task.id, columnId);
                }}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete task</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
