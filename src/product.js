var chalk = require('chalk');

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.toString = function(currency, rateCurrency, unitTime) {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
      var unitTime = unitTime || 'minutes';
    //return chalk.yellow(this.name) + ' cost ' + chalk.red(this.price * rateCurrency) + currency;
      return `${chalk.yellow(this.name)} cost ${chalk.red(this.price * rateCurrency)} ${currency}, duration : ${this.getDuration()} ${unitTime}`;
  }
  
}

function Book(name, price, isbn, minDuration, maxDuration) {
  Product.apply(this, [name, price]);
  this.isbn = isbn;
  this.getDuration = function(){
      return (minDuration+maxDuration)/2;
  }
}
Book.prototype = Object.create(Product.prototype, {
  constructor: {value: Book}
});

function DVD(name, price, moovie, runningTime) {
  Product.apply(this, [name, price]);
  this.moovie = moovie;
  this.getDuration = function(){
      return runningTime;
  }
}
DVD.prototype = Object.create(Product.prototype, {
  constructor: {value: DVD}
});

function VideoGame(name, price, platform,minDuration, maxDuration) {
  Product.apply(this, [name, price]);
  this.platform = platform;
  this.getDuration = function(){
      return (minDuration+maxDuration)/2;
  }
}
VideoGame.prototype = Object.create(Product.prototype, {
  constructor: {value: VideoGame}
});

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};