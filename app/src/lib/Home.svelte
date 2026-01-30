<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";

  const projects = [
    {
      name: "My dotfiles",
      description:
        "A complete dotfiles setup for a developer environment with Neovim, Zsh, bspwm and other tools. Made for personal use.",
      links: [
        { label: "GitHub", url: "https://github.com/davidbalishyan/dotfiles" },
        {
          label: "Blog Post",
          url: "https://davidbalishyan.github.io/blog/2026/01/25/dotfiles.html",
        },
      ],
    },
    {
      name: "My personal blog",
      description: "A blog about my experiences and thoughts.",
      links: [
        { label: "GitHub", url: "https://github.com/davidbalishyan/blog" },
        { label: "Website", url: "https://davidbalishyan.github.io/blog" },
        {
          label: "Blog post",
          url: "https://davidbalishyan.github.io/blog/introduction/jekyll/2026/01/18/hi-jekyll.html",
        },
      ],
    },
    {
      name: "Portfolio",
      description:
        "A clean, Gruvbox-themed personal homepage built with Svelte and Vite.",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/davidbalishyan/davidbalishyan.github.io",
        },
        { label: "Live", url: "https://davidbalishyan.github.io" },
      ],
    },

    {
      name: "Betterfetch",
      description:
        "A ligthweight and fast way to fetch and display information about your system.",
      links: [
        { label: "GitHub", url: "https://github.com/betterfetch/betterfetch" },
        { label: "Website", url: "https://betterfetch.vercel.app" },
      ],
    },
    {
      name: "Miniedit",
      description:
        "A simple TUI text editor written in Rust. Made to be lightweight and easy to use.",
      links: [
        { label: "GitHub", url: "https://github.com/davidbalishyan/miniedit" },
      ],
    },
  ];

  let currentPage = $state(0);
  const itemsPerPage = 4;
  const paginatedProjects = $derived(
    projects.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage,
    ),
  );
  const totalPages = $derived(Math.ceil(projects.length / itemsPerPage));

  function next() {
    if (currentPage < totalPages - 1) currentPage++;
  }

  function prev() {
    if (currentPage > 0) currentPage--;
  }
</script>

<main>
  <header>
    <h1>David Balishyan</h1>
    <p class="tagline">Software Developer / Systems / Web</p>
  </header>

  <section id="projects">
    <div class="section-header">
      <h2>Projects</h2>
      {#if totalPages > 1}
        <div class="pagination-controls">
          <button onclick={prev} disabled={currentPage === 0}>&lt; prev</button>
          <span class="page-info">{currentPage + 1} / {totalPages}</span>
          <button onclick={next} disabled={currentPage === totalPages - 1}
            >next &gt;</button
          >
        </div>
      {/if}
    </div>
    <div class="project-list">
      {#each paginatedProjects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>

  <footer>
    <div class="footer-links">
      <a
        href="https://github.com/davidbalishyan"
        target="_blank"
        rel="noopener noreferrer">GitHub</a
      >
      <a href="mailto:davidbalishyan12@gmail.com">Email</a>
      <a
        href="https://linkedin.com/in/david-balishyan-28b2752a1"
        target="_blank"
        rel="noopener noreferrer">LinkedIn</a
      >
    </div>
    <p class="copyright">&copy; {new Date().getFullYear()} David Balishyan</p>
  </footer>
</main>

<style>
  main {
    width: 100%;
  }

  header {
    margin-top: 4rem;
    text-align: left;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--bg1);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
    border-bottom: none;
    display: inline-block;
    padding-bottom: 0.25rem;
  }

  .pagination-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  button {
    background: none;
    border: 1px solid var(--bg1);
    color: var(--fg1);
    padding: 0.25rem 0.75rem;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s;
    border-radius: 4px;
  }

  button:hover:not(:disabled) {
    border-color: var(--yellow);
    color: var(--yellow);
  }

  button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .page-info {
    color: var(--gray);
    min-width: 4rem;
    text-align: center;
  }

  .project-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  footer {
    margin-top: 5rem;
    padding-top: 2rem;
    border-top: 1px solid var(--bg1);
    text-align: center;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  .copyright {
    color: var(--gray);
    font-size: 0.8rem;
  }
</style>
