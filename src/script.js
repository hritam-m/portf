function fetchContent(page) {
  return fetch(`components/${page}.shyp`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${page} content: ${response.status} - ${response.statusText}`);
      }
      return response.text();
    })
    .catch((error) => {
      throw error;
    });
}

function showContent(page) {
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = "";

  fetchContent(page)
    .then((content) => {
      mainContent.innerHTML = content;
    })
    .catch((error) => {
      mainContent.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// Handle routing based on the current URL path
window.addEventListener("popstate", () => {
  showContent(window.location.pathname.slice(1) || "home");
});

// Show the home page by default
showContent("home");