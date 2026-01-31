# David Balishyan

My personal website and portfolio, acting as a central hub for my projects and online presence.

**Live Site:** [davidbalishyan.github.io](https://davidbalishyan.github.io)

## Overview

This repository contains the source code for my personal website. It is designed to be a clean, fast, and accessible portfolio that showcases my work and provides easy access to my other projects.

Built with **Svelte 5** and **Vite**, it features a responsive design and a custom **Gruvbox** color theme.

## Features

- **Portfolio Showcase**: Highlights key projects
- **Smart Redirects**: Automatically redirects unknown paths (e.g., `/my-project`) to the corresponding GitHub repository (`github.com/davidbalishyan/my-project`).
- **Gruvbox Theme**: A consistent, easy-on-the-eyes color scheme.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## Tech Stack

- **Framework**: [Svelte 5](https://svelte.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Project Structure

- `app/`: Contains the Svelte source code.
- `app/src/lib/`: Svelte components (Home, ProjectCard).
- `app/src/App.svelte`: Main entry point handling routing logic.

## Local Development

To run the project locally:

```bash
cd app
```

2.  **Install dependencies:**

```bash
pnpm install
```

3.  **Start the development server:**

```bash
 pnpm dev
 ```


## License

This project is open source and available under the [MIT License](LICENSE).
