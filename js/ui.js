export class UI {
  displayGames(games) {
    let gamesBox = '';
    for (let game of games) {
      gamesBox += `
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div id="${game.id}" class="card text-white h-100 bg-transparent" role="button">
            <div class="card-body">
              <figure>
                <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}" />
              </figure>
              <figcaption>
                <div class="hstack justify-content-between">
                  <h3 class="h6 small">${game.title}</h3>
                  <span class="badge text-bg-primary p-2">Free</span>
                </div>
                <p class="card-text small pt-2 text-center opacity-50">${game.short_description.split(" ", 8).join(' ')}</p>
              </figcaption>
            </div>
            <footer class="card-footer small hstack justify-content-between">
              <span class="badge badge-color">${game.genre}</span>
              <span class="badge badge-color">${game.platform}</span>
            </footer>
          </div>
        </div>
      `;
    }
    document.getElementById('gamesData').innerHTML = gamesBox;
  }

  displayDetails(data) {
    const content = `
      <div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="image details" />
      </div>
      <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
        <p class="small">${data.description}</p>
        <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
      </div>
    `;
    document.getElementById("detailsContent").innerHTML = content;
  }

  showLoading() {
    document.querySelector('.loading').classList.remove('d-none');
  }

  hideLoading() {
    document.querySelector('.loading').classList.add('d-none');
  }
}
