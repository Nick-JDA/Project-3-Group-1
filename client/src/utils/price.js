const getRandomPrice = () => {
    let price  = Math.floor(Math.random() * 100);
    price = parseFloat(price);
    price = price + 10.99;
    return price.toFixed(2); 
};

module.exports = getRandomPrice;