const GITHUB_USERNAME = "DavidBalishyan";
const container = document.getElementById("repo-list");

    async function fetchRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        const repos = await response.json();
        container.innerHTML = "";

        if (!Array.isArray(repos)) {
          container.innerHTML = "<p class='text-red-400'>Failed to load repositories.</p>";
          return;
        }

        repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        repos.forEach(repo => {
          const card = document.createElement("div");
          card.className = "bg-slate-800 p-5 rounded shadow hover:shadow-lg transition";

          card.innerHTML = `
            <h3 class="text-xl font-semibold text-blue-300 mb-1">${repo.name}</h3>
            <p class="text-slate-300 text-sm mb-3">${repo.description || "No description"}</p>
            <div class="flex justify-between items-center text-sm text-slate-400">
              <span>★ ${repo.stargazers_count}</span>
              <a href="${repo.html_url}" target="_blank" class="text-blue-400 hover:underline">View on GitHub →</a>
            </div>
          `;

          container.appendChild(card);
        });
      } catch (error) {
        console.error(error);
        container.innerHTML = "<p class='text-red-400'>Error fetching repositories.</p>";
      }
    }

    fetchRepos();