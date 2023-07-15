const db = require('../config/connection');
const { Game } = require("../models");
const  getRandomPrice  = require("../utils/price")

let url = "https://api.rawg.io/api/games?key=b10c092cf00745d9b1c1a1fe4114df1f";
let url2 = "https://api.rawg.io/api/games/3498?key=b10c092cf00745d9b1c1a1fe4114df1f"
// Get Game Name, API_ID, IMAGE 
let empty = [];
db.once("open", async () => {

  async function get_api() {
    const response = await fetch(url);
    const information = await response.json();
    for (let i = 0; i < (information.results).length; i ++) {
      let id = information.results[i].id
      const response2 = await fetch(`https://api.rawg.io/api/games/${id}?key=b10c092cf00745d9b1c1a1fe4114df1f`)
      const information2 = await response2.json();
      let mod = {
        name: information.results[i].name,
        img: information.results[i].background_image,
        description: information2.description_raw,
        price: getRandomPrice(),
      }
      empty.push(mod);
    }
    return empty;
  }

  get_api()
    .then(async function(result) {
      console.log(result);
      console.log("Working");
      await Game.deleteMany({});
      await Game.insertMany(result);
      console.log('all done!');
      process.exit(0);
    })
})


