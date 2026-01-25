<script lang="ts">
  export let name: string;
  export let description: string;
  export let links: { label: string; url: string }[];
</script>

<div class="project-card">
  <h3>{name}</h3>
  <p>{description}</p>
  <div class="links">
    {#each links as link}
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        [{link.label}]
      </a>
    {/each}
  </div>
</div>

<style>
  .project-card {
    padding: 1.5rem;
    border: 1px solid var(--bg1);
    background-color: var(--bg0);
    transition: all 0.2s ease-in-out;
    margin-bottom: 1rem;
    border-radius: 4px;
    position: relative;
  }

  .project-card:hover {
    border-color: var(--green);
    transform: translateX(4px);
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--yellow);
  }

  p {
    color: var(--fg1);
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .links {
    display: flex;
    gap: 1rem;
    font-family: inherit;
  }

  a {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
</style>
