# Task Checklist

This is a simple task checklist application built with Next.js and styled using Tailwind CSS. The application allows users to add, complete, and delete tasks, with all tasks being persisted in local storage to prevent loss on refresh.

## Features

- Add new tasks using an input field and button.
- Display tasks in a list with checkboxes to toggle completion.
- Strike-through style for completed tasks.
- Delete tasks from the list.
- Persistent storage of tasks using local storage.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lightyearty/Demo.git
   cd Demo/task-checklist
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**

   Navigate to `http://localhost:3000` to view the application.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- TypeScript

## Folder Structure

- `app/`: Contains the main application layout and pages.
- `components/`: Contains reusable React components for task input, list, and items.
- `hooks/`: Contains custom hooks for managing local storage.
- `styles/`: Contains global styles and Tailwind CSS configuration.
- `public/`: Contains static assets.
- `next.config.js`: Configuration for Next.js.
- `package.json`: Lists dependencies and scripts.
- `tsconfig.json`: TypeScript configuration.
- `postcss.config.js`: Configuration for PostCSS.
- `tailwind.config.js`: Configuration for Tailwind CSS.

## License

This project is open-source and available under the [MIT License](LICENSE).