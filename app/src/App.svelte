<script lang="ts">
  import Home from "./lib/Home.svelte";
  import { onMount } from "svelte";

  let isHome = $state(true);

  onMount(() => {
    // Basic routing logic
    const path = window.location.pathname;

    // Check if we're at the root or index.html
    const isRoot =
      path === "/" ||
      path === "/index.html" ||
      path.endsWith("/app/") ||
      path.endsWith("/app");
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    const segments = cleanPath.split("/").filter(Boolean);

    if (segments.length > 0 && segments[0] !== "index.html") {
      const excludedPaths = ["blog"];
      if (excludedPaths.includes(segments[0])) {
        return;
      }

      isHome = false;
      const target = segments[0]; // Assuming [[something]] is the first segment
      // Redirect
      window.location.href = `https://github.com/DavidBalishyan/${target}`;
    }
  });
</script>

{#if isHome}
  <Home />
{:else}
  <main>
    <p>Redirecting to GitHub...</p>
  </main>
{/if}

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: inherit;
    color: var(--fg1);
  }
</style>
