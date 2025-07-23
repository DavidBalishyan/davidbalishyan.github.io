const username = 'DavidBalishyan'; // Change to your GitHub username
  const pagesList = document.getElementById('pages-list');

  async function getRepos(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    return await res.json();
  }

  async function getPagesSite(owner, repo) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/pages`);
    if (!res.ok) return null;
    return await res.json();
  }

  async function listPagesSites() {
    pagesList.innerHTML = `<p>Loading GitHub Pages sites...</p>`;
    const repos = await getRepos(username);

    const pagesSites = await Promise.all(
      repos.map(async (repo) => {
        const page = await getPagesSite(username, repo.name);
        return page && page.html_url ? {
          name: repo.name,
          url: page.html_url,
          description: repo.description || ''
        } : null;
      })
    );

    const filtered = pagesSites.filter(Boolean);

    if (filtered.length === 0) {
      pagesList.innerHTML = `<p>No GitHub Pages sites found.</p>`;
      return;
    }

    pagesList.innerHTML = filtered.map(site => `
      <a href="${site.url}" target="_blank" class="block p-4 rounded-xl border hover:bg-gray-900 transition">
        <h3 class="text-xl font-semibold">${site.name}</h3>
        <p class="text-gray-400">${site.description}</p>
        <span class="text-blue-500">${site.url}</span>
      </a>
    `).join('');
  }

  listPagesSites();