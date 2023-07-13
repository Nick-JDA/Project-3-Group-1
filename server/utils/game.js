async function getGame() {
    let game_api = "https://api.rawg.io/api/games?key=b10c092cf00745d9b1c1a1fe4114df1f";
    const response = await fetch(game_api);
    const information = await response.json();
    return information;
}