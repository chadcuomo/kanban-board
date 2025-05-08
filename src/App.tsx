import { KanbanBoard } from "./components/KanbanBoard";

function App() {
  return (
    <main className="container mx-auto p-4 md:p-6 lg:p-8 min-h-screen">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Kanban Board</h1>
        <p className="text-muted-foreground">Organize your tasks.</p>
      </div>
      <KanbanBoard />
    </main>
  );
}

export default App;
