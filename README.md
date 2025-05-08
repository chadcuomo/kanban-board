# Kanban Board

A Kanban board application built with React, TypeScript, Vite, and Tailwind CSS. This project allows users to manage tasks through a visual board interface.

## Features

- **Drag-and-Drop:** Easily move tasks between columns and reorder them within columns using `@hello-pangea/dnd`.
- **Column Management:** Create, rename, and delete columns. (Future Feature)
- **Task Management:** Create, edit, and delete tasks within columns. (Future Feature)
- **Responsive Design:** Adapts to different screen sizes for a seamless experience.
- **Dark Mode:** Supports a dark theme for user preference.

## Tech Stack

- **Frontend Framework:** [React](https://react.dev/) (v19) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
  - [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) for animations.
- **Drag and Drop:** [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
- **UI Components:**
  - [Radix UI](https://www.radix-ui.com/) (Dialog, Label, Select, Slot)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting:** [ESLint](https://eslint.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/installation)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/chadcuomo/kanban-board.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd kanban-board
    ```
3.  Install dependencies:
    ```bash
    pnpm install
    ```

### Running the Development Server

To start the development server with hot module replacement:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

### Building for Production

To create a production build:

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

### Linting

To run the linter and check for code quality issues:

```bash
pnpm lint
```

## Project Structure (Overview)

```
kanban-board/
├── public/               # Static assets
├── src/                  # Source files
│   ├── components/       # Reusable UI components
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Entry point
├── index.html            # Main HTML file
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project metadata and dependencies
└── README.md             # This file
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or features to add.

_(Consider adding guidelines for commit messages, code style, etc. if you have a larger team or open-source project)._

## License

This project is currently unlicensed.
