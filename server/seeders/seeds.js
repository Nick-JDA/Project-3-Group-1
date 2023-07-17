const db = require('../config/connection');
const { Product, Category } = require("../models");
const  getRandomPrice  = require("../utils/price")
let catIds = [];
let url = "https://api.rawg.io/api/games?key=b10c092cf00745d9b1c1a1fe4114df1f";
// let url2 = "https://api.rawg.io/api/games/3498?key=b10c092cf00745d9b1c1a1fe4114df1f"
// Get Game Name, API_ID, IMAGE 


db.once("open", async () => {

async function get_category() {
    const response = await fetch(url);
    const information = await response.json();
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < information.results.length; i ++) {
        let genre;
        if (information.results[i].genres.length > 1) {
            genre = (information.results[i].genres[0].name + " " + information.results[i].genres[1].name)
        } else if (information.results[i].genres.length === 1) {
            genre = ("Adventure");
        }
        if (arr.includes(genre)) {
            arr = arr;
            arr2 = arr2;
        } else {
            arr.push(genre);
            let genre2 = {
                name: genre
            }
            arr2.push(genre2)
        }
    }
    return arr2;
}

get_category()
.then(async function(result) {
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Category.insertMany(result)
    .then(async function(data) {
      let empty = [];
      const response = await fetch(url);
      const information = await response.json();
      for (let i = 0; i < information.results.length; i ++) {
        let id = information.results[i].id
        const response2 = await fetch(`https://api.rawg.io/api/games/${id}?key=b10c092cf00745d9b1c1a1fe4114df1f`)
        const information2 = await response2.json();
        let genre;
        if (information.results[i].genres.length > 1) {
            genre = (information.results[i].genres[0].name + " " + information.results[i].genres[1].name)
        } else if (information.results[i].genres.length === 1) {
            genre = ("Adventure");
        }

        if (genre === "Action Adventure") {
          await Product.insertMany({
            name: information.results[i].name,
            image: information.results[i].background_image,
            description: information2.description_raw,
            quantity: 100,
            price: getRandomPrice(),
            category: data[0]._id,
            type: genre,
          })
        } else if (genre === "Shooter Puzzle") {
          await Product.insertMany({
            name: information.results[i].name,
            image: information.results[i].background_image,
            description: information2.description_raw,
            quantity: 100,
            price: getRandomPrice(),
            category: data[1]._id,
            type: genre,
          })
        } else if (genre === "Action Shooter") {
          await Product.insertMany({
            name: information.results[i].name,
            image: information.results[i].background_image,
            description: information2.description_raw,
            quantity: 100,
            price: getRandomPrice(),
            category: data[2]._id,
            type: genre,
          })
        } else if (genre === "Adventure Puzzle") {
          await Product.insertMany({
            name: information.results[i].name,
            image: information.results[i].background_image,
            description: information2.description_raw,
            quantity: 100,
            price: getRandomPrice(),
            category: data[3]._id,
            type: genre,
          })
        } else if (genre === "Action RPG") {
          await Product.insertMany({
            name: information.results[i].name,
            image: information.results[i].background_image,
            description: information2.description_raw,
            quantity: 100,
            price: getRandomPrice(),
            category: data[4]._id,
            type: genre,
          })
        } else if (genre === "Adventure") {
          await Product.insertMany({
            name: information.results[i].name,
            image: information.results[i].background_image,
            description: information2.description_raw,
            quantity: 100,
            price: getRandomPrice(),
            category: data[5]._id,
            type: genre,
          })
        } else if (genre === "Adventure Indie") {
          await Product.insertMany({
            name: information.results[i].name,
            image: information.results[i].background_image,
            description: information2.description_raw,
            quantity: 100,
            price: getRandomPrice(),
            category: data[6]._id,
            type: genre,
          })
        }
      }
    })
    console.log("Category inserted");
    console.log("Product inserted");
    console.log("Done seeding");

}) 

})


