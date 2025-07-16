# Front-end Task: Mini Handouts Viewer

A lightweight React-based viewer application powered by Vite, TypeScript, and modern tooling.

---

## 📦 Tech Stack

- **React 19** – For UI rendering
- **Vite** – build tool
- **TypeScript** – we use TypeScript to make code easier to maintain
- **TanStack Query** – Library for data fetching and caching
- **ESLint** – Code linting for consistency and quality
- **Prettier** – Code formatting for consistent style
- **NVM** – Node Version Manager for environment consistency

---

## ⚙️ Prerequisites

To ensure compatibility, please use the specified Node.js version.

### Required Tools:

- **[Node.js](https://nodejs.org/)** (Managed via NVM)
- **[NVM](https://github.com/nvm-sh/nvm)** (Node Version Manager)

### Node Version

This project includes a `.nvmrc` file that specifies the required Node version. To use it:

```bash
nvm use
```

If you don’t have the specified version installed:

```bash
nvm install
```

---

## 📜 Scripts & Explanations

Available npm scripts for development and production:

| Script           | Command                | Description                                                       |
| ---------------- | ---------------------- | ----------------------------------------------------------------- |
| **dev**          | `vite`                 | Starts the development server with hot module replacement (HMR).  |
| **build**        | `tsc -b && vite build` | Compiles TypeScript and bundles the app for production.           |
| **preview**      | `vite preview`         | Previews the production build locally.                            |
| **lint**         | `eslint .`             | Runs ESLint across the codebase to catch syntax and style issues. |
| **format**       | `prettier --write .`   | Formats all files using Prettier for consistent code style.       |
| **format:check** | `prettier --check .`   | Checks if files are properly formatted without making changes.    |

---

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mini-handout-viewer.git
   cd mini-handout-viewer
   ```

2. Use the correct Node version:

   ```bash
   nvm use
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   or run preview

   ```bash
   npm run preview
   ```

---

## 🗂️ Project Structure

```
.
├── public/              # Static files
│   └── steps.json       # Step data for the handouts viewer
├── src/                 # Application source code
│   ├── components/      # Global components
│   ├── hooks/           # Custom hooks (TanStack Query)
│   ├── types/           # TypeScript type definitions
│   ├── pages/           # Application pages and their loacl components
│   └── App.tsx          # Entry point with QueryClient setup
├── .nvmrc               # Node version declaration
├── .prettierrc          # Prettier configuration
├── .prettierignore      # Prettier ignore patterns
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

# Task

Hi there!

We’d like to invite you to take on a front-end task that will help us understand how you structure UI, work with JSON data, and organize your code. The task should take no longer than 4–6 hours.

This is not about pixel-perfect details or spending days polishing – we’re more interested in seeing how you think about component architecture, scalability, and sustainability.

## Task Goal

Build a mini handouts viewer that displays a list of steps from a JSON file and allows users to browse them interactively.

This task is inspired by the interactive handouts in our edtech platform ([see example](https://mano.vedliai.lt/lt/pratybos/RKSI?locale=lt)).

<aside>
ℹ️

Context: In our platform, we use ProseMirror to power a custom rich-text editor. All exercise content is saved in JSON format, but you will not have to deal with that. The `steps.json` contains already transformed HTML snippets (summaryHtml and detailsHtml) which should be displayed in a clean and user-friendly way.

</aside>

## Requirements

1. This task must be implemented using React.
2. Load step data from `steps.json` (provided).
3. Display one step at a time with its summary and details.
4. Allow users to mark steps as "completed" (e.g., a checkbox or visual indicator).
5. Use the provided `editor.css` as base styling (you can add additional styles if necessary).
6. Bonus: Accessibility. We know time is limited – we don’t expect full accessibility support. Even small a11y considerations will give us great insights into how you think.

## Starter Files

We provide three starter files:

- **document.html**: Main HTML structure with a basic script to load JSON and render steps.
- **editor.css**: Base styles to make content look similar to our platform.
- **steps.json**: Step data with HTML snippets.

<aside>
📎

[document.html](attachment:3e4b5f8a-67b9-4671-b0bb-21ee92db4ab0:document.html)

[editor.css](attachment:319b18aa-f9cf-460e-bc96-91ad439d5b92:editor.css)

[steps.json](attachment:ce32606e-168e-4ec5-9a34-cee652f3b643:steps.json)

</aside>

## Evaluation Criteria

- Clean and maintainable code structure
- Logical UI architecture (components, state management)
- User experience (UX)
- Bonus points for:
  - Responsive design
  - Accessibility support

## Submission

- Send us **a link to a Git repository**.
- Include instructions on how to run the project (e.g., npm install / build). If it’s static, it should run directly in a browser.
- Submit your results to [**rita@vedliai.lt**](mailto:rita@vedliai.lt)
