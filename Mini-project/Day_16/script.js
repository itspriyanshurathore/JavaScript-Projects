document.addEventListener("DOMContentLoaded", () => {
  const movieForm = document.getElementById("movieForm");
  const movieResults = document.getElementById("movieResults");

  movieForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const movieName = document.getElementById("movieInput").value.trim();
    if (movieName) {
      MovieFetch(movieName);
    } else {
      movieResults.innerHTML = `<div class="error-message">Please enter a movie name</div>`;
    }
  });

  async function MovieFetch(movieName) {
    try {
      movieResults.innerHTML = '<div class="loading">Searching Movies...</div>';

      const response = await fetch(
        `http://www.omdbapi.com/?apikey=14e82aca&s=${encodeURIComponent(
          movieName
        )}`
      );
      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error || "Movie not found");
      }

      displayMovie(data.Search);
    } catch (error) {
      movieResults.innerHTML = `<div class="error-message">${error.message}</div>`;
    }
  }

  function displayMovie(movies) {
    movieResults.innerHTML = `
      <div class="movies-grid">
        ${movies
          .map(
            (movie) => `
            <div class="movie-card">
              <img src="${
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }"
              alt="${movie.Title}"
              class="movie-poster"/>
              <div class="movie-info">
                <h3 class="movie-title">${movie.Title}</h3>
                <div class="movie-year">${movie.Year}</div>
              </div>
            </div>
          `
          )
          .join("")}
      </div>
    `;
  }
});
