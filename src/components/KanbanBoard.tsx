import { useState } from "react";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import { KanbanColumn } from "./KanbanColumn";
import { DragHint } from "./DragHint";
import type { KanbanTask, KanbanColumn as ColumnType } from "@/types/kanban";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { NewTaskDialog } from "./NewTaskDialog";
import { NewColumnDialog } from "./NewColumnDialog";
import { initialColumns } from "@/lib/utils";

export function KanbanBoard() {
  const [columns, setColumns] = useState<ColumnType[]>(initialColumns);
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const [isColumnDialogOpen, setIsColumnDialogOpen] = useState(false);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    if (type === "column") {
      const newColumns = [...columns];
      const [movedColumn] = newColumns.splice(source.index, 1);
      newColumns.splice(destination.index, 0, movedColumn);
      setColumns(newColumns);
      return;
    }

    const newColumns = [...columns];

    const sourceColumnIndex = newColumns.findIndex(
      (col) => col.id === source.droppableId
    );
    const destColumnIndex = newColumns.findIndex(
      (col) => col.id === destination.droppableId
    );

    const [movedTask] = newColumns[sourceColumnIndex].tasks.splice(
      source.index,
      1
    );

    newColumns[destColumnIndex].tasks.splice(destination.index, 0, movedTask);
    setColumns(newColumns);
  };

  const handleAddTask = (task: Omit<KanbanTask, "id">, columnId: string) => {
    const newTask: KanbanTask = {
      ...task,
      id: `task-${Date.now()}`,
    };

    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          tasks: [...column.tasks, newTask],
        };
      }
      return column;
    });

    setColumns(newColumns);
    setIsTaskDialogOpen(false);
  };

  const handleDeleteTask = (taskId: string, columnId: string) => {
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          tasks: column.tasks.filter((task) => task.id !== taskId),
        };
      }
      return column;
    });

    setColumns(newColumns);
  };

  const handleAddColumn = (columnTitle: string) => {
    const newColumn: ColumnType = {
      id: `column-${Date.now()}`,
      title: columnTitle,
      tasks: [],
    };

    setColumns([...columns, newColumn]);
    setIsColumnDialogOpen(false);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Tasks</h2>
        <div className="flex gap-2">
          <Button
            onClick={() => setIsColumnDialogOpen(true)}
            size="sm"
            variant="outline"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Column
          </Button>
          <Button onClick={() => setIsTaskDialogOpen(true)} size="sm">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex overflow-x-auto pb-4 space-x-6"
              style={{ minWidth: "fit-content" }}
            >
              {columns.map((column, index) => (
                <KanbanColumn
                  key={column.id}
                  column={column}
                  index={index}
                  onDeleteTask={handleDeleteTask}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <NewTaskDialog
        open={isTaskDialogOpen}
        onOpenChange={setIsTaskDialogOpen}
        onAddTask={handleAddTask}
        columns={columns}
      />

      <NewColumnDialog
        open={isColumnDialogOpen}
        onOpenChange={setIsColumnDialogOpen}
        onAddColumn={handleAddColumn}
      />

      <DragHint />
    </div>
  );
}
