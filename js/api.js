export class Api {
  async fetchGames(category = 'mmorpg') {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '1fd200fa9fmsh0c3d176d1e5a231p116f72jsncf986d1ba865',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    const url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
    return await url.json();
  }

  async fetchGameDetails(id) {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '1fd200fa9fmsh0c3d176d1e5a231p116f72jsncf986d1ba865',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    const url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    return await url.json();
  }
}
