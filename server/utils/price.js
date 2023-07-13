function getRandomPrice() {
    let price  = Math.floor(Math.random() * 100);
    price = parseFloat(price);
    price = price + 0.99;
    return price; 
}