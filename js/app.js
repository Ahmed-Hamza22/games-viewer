import { Api } from './api.js';
import { UI } from './ui.js';

const api = new Api();
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {loadGames();}); //Start Application.

// display games from category that I clicked on navbar
document.querySelectorAll(".nav-link").forEach((category) => {
  category.addEventListener("click", async function() {
    const clickedCategory = this.innerText.toLowerCase();
    loadGames(clickedCategory);
    document.querySelector('.active').classList.remove('active');
    category.classList.add('active');
  });
});

// close details screen
document.getElementById("btnClose").addEventListener("click", () => {
  document.querySelector(".games").classList.remove("d-none");
  document.querySelector(".details").classList.add("d-none");
});

// fetch games from api and display these games
async function loadGames(category = 'mmorpg') {
  ui.showLoading();
  const games = await api.fetchGames(category);
  ui.displayGames(games);
  ui.hideLoading();
  clickedCard();
}

// display details from card that I clicked
function clickedCard() {
  document.querySelectorAll(".card").forEach((item) => {
    item.addEventListener("click", async function() {
      const clickedId = this.id;
      ui.showLoading();
      const details = await api.fetchGameDetails(clickedId);
      ui.displayDetails(details);
      ui.hideLoading();
      document.querySelector('.details').classList.remove('d-none');
      document.querySelector('.games').classList.add('d-none');
    });
  });
}
