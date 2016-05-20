var reels = [];
var $reels = $('.poke');
var coins = 0;
var multiplier = 0;
var Pikachu = 5;
var Torchik = 25;
var Flareon = 30;
var Vaporeon = 40;
var Leafeon = 50;
var Sevens = 150;
var betAmount = 0;

var pokes = ['poke0', 'poke1', 'poke2', 'poke3',
 'poke4', 'poke5'];

var bulbs = ['empty_bulb.png', 'lit_bulb_0_a.png', 'lit_bulb_0_b.png',
             'lit_bulb_1_a.png', 'lit_bulb_1_b.png', 'lit_bulb_2_a.png',
             'lit_bulb_2_b.png', 'lit_bulb_3_a.png', 'lit_bulb_4_b.png',
             'lit_bulb_4_a.png', 'lit_bulb_4_b.png', 'lit_bulb_5_a.png',
             'lit_bulb_5_b.png'
            ];

$(document).ready(function(){
  alert("Welcome to Poke Slots! Enjoy. ++500 Coins++ -Alex1100");
  coins+=500;
  $(".slot_sounds_b").trigger("play");
  render();
  startFlashing();
  $('#spin_wheel').on('click', function() {
    if(coins <= 0 && betAmount <= 0){
      coins = 0;
      alert("Lost All The Coins! Give It Another Shot!");
      location.reload();
    } else {
      $(".slot_sounds_a").trigger("play");
      $(this).css('color', 'gold');
      spinWheel();
    }
  });
  $("#spin_wheel").hover(function(){
    $(this).css('color', 'red');
    }, function(){
      $(this).css('color', 'black');
    previousBet();
    render();
    });
  $("#bet").hover(function(){
    $(this).css('color', 'red');
    }, function(){
      $(this).css('color', 'black');
  });
  $("#bet").on('click', function(){
    $(this).css('color', 'gold');
    if(betAmount < 491 && coins > 0){
      increaseBet();
      $(".slot_sounds_b").trigger("play");
    }
    if(betAmount === 500 && coins > 0) {
      alert("Max bet is 500 coins!");
    }
    if(betAmount === 0 && coins <= 0){
      alert("Insufficient Funds. Minimum bet is 10 coins!");
      location.reload();
    }
    render();
  });
  $("#decrease").hover(function(){
    $(this).css('color', 'red');
    }, function(){
      $(this).css('color', 'black');
  });
  $("#decrease").on('click', function(){
    $(this).css('color', 'gold');
    if(betAmount > 0){
      decreaseBet();
      $(".slot_sounds_b").trigger("play");
    } else{
      alert("Minimum Bet is 10!");
    }
    render();
  });
  $("#max_bet").hover(function(){
    $(this).css('color', 'red');
    }, function(){
      $(this).css('color', 'black');
  });
  $("#max_bet").on('click', function(){
    $(this).css('color', 'gold');
    if(betAmount == 0){
      betAmount += coins;
      coins-= betAmount;
    } else if(betAmount >= 10 && betAmount <=500){
      betAmount += coins;
      coins-=coins
    }
    $(".slot_sounds_b").trigger("play");
    $(".bet_coins").text(betAmount);
    $("#coins").text(coins);
    alert("Max Wager Placed!");
  });
});

// 1. sounds for sevens win jackpot + special animation,
//    or if sevens win then pause music and start new jackpot music
// 2. make divs in each cell, shake them using .shake() for a setinterval time
//    on a click event of spin button and setTimeout function for selectPokemons().
// 3. when win condition met have lines show and then shortly after remove class
// 4. when winning turn display lights to same color, winning sound effect and pause spin function
//    and see if there can be a way to increase coin count by each number
// 5. 24 different hr elements that will need to be created and placed
//    within body_display with a display of none initially
// 6. place $("selector").trigger() within each winning condition as a variable to be implemented for
//    sevens sound effects and try to include an animation along with it

// increase bet amount as long as coins is true/truthy data type
function increaseBet(){
  if(coins){
    betAmount += 10;
    coins -= 10;
    $(".bet_amount").text(betAmount);
    $("#coins").text(coins);
  }
}

//decrease bet amount as long as coins is true/truthy data type
function decreaseBet(){
  if(coins || coins !== undefined){
    betAmount -= 10;
    coins += 10;
    $(".bet_amount").text(betAmount);
    $("#coins").text(coins);
  }
}

// pretty self explanatory ;)
function spinWheel(){
  if(betAmount > 0 && coins >= 0){
    selectPokemons();
    checkIndex();
    render();
  }
}

// Checks to see if bet event is working and secures previous betAmount stored into .bet_amount element
// and coins won't reach negative number

// fix logic to account for coins being greater than 500
function checkBetAmount(){
  if((betAmount > coins && coins < Infinity) && betAmount < Infinity){
    if (coins < 0) {
      coins = 0;
    }
    betAmount = coins;
  } else {
    coins -= betAmount;
  }
}

// Example of Clojure
// Executes the chngeLight function 6 times with each iteration
// grabbing a random image from the bulbs array and altering it's
// css url property, which changes images every ~quarter second
// in an order of creation of each div
// so the first div (light-0) will be iterated through more frequently than the last (light-5)
// a subtle difference in amount of photoswapping but not really noticeable
function startFlashing() {
  for (var i = 0; i < 6; i++) {
    (function(j) {
      setInterval(function() {
        changeLight(j);
      }, 275);
    })(i);
  }

  // A function within a function that randomly selects div with an id of light0 - light5
  // and a random image from the bulbs array as bulbs[rnd]
  function changeLight(lightNum) {
    var $light = $('#light-' + lightNum);
    var rnd = Math.floor(Math.random() * 12) + 1;
    $light.css({'background-image': 'url("images/' + bulbs[rnd] + '")'});
  }
}

  // get 9 random numbers between 0 and one less than the number of poke images inside of the pokes array
  // using getRndUpTo as a callback and passing parameter of pokes array .length
  // reels[i] content is equal to a random poke class from pokes array
  // next we remove w/e class previously populating that cell of reels[i] and add new class based on each spin
function selectPokemons() {
  for (var i = 0; i < 10; i++) {
    var rndNum = getRndUpTo(pokes.length);
    reels[i] = pokes[rndNum];
  }
  $reels.each(function(idx) {
    $(this).removeClass().addClass('poke ' + reels[idx]);
  });
  console.log(reels);
}

// Winning Conditionals
// if betAmount <= 100 only middle horizontal lining up will win
// if betAmount >= 100 all three rows with horizontal matches will win
// if betAmount >= 400 all win conditionals apply (horizontals and diagonals)
function checkIndex(){
  if((betAmount >= 100) && (reels[0] === reels[1]) && reels[0] === reels[2]){
    multiplier = 10;
    countCoins(reels[0]);
    return true;
  }
  if((betAmount <= 100) && (reels[3] === reels[4]) && reels[3] === reels[5]){
    multiplier = 10;
    countCoins(reels[3]);
    return true;
  }
  if((betAmount >= 100) && (reels[6] === reels[7]) && reels[6] === reels[8]){
    multiplier = 10;
    countCoins(reels[6]);
    return true;
  }
  if((betAmount >= 400) && (reels[0] === reels[4]) && reels[0] === reels[8]){
    multiplier = 3;
    countCoins(reels[0]);
    return true;
  }
  if((betAmount >= 400) &&(reels[2] === reels[4]) && reels[2] === reels[6]){
    multiplier = 3;
    countCoins(reels[2]);
    return true;
  }
  if((betAmount >= 400) && (reels[0] === reels[2]) && reels[0] === reels[4]){
    multiplier = 2;
    countCoins(reels[0]);
  }
  if((betAmount >= 400) && (reels[3] === reels[1]) && reels[3] === reels[2]){
    multiplier = 2;
    countCoins(reels[3]);
  }
  if((betAmount >= 400) && (reels[3] === reels[1]) && reels[3] === reels[5]){
    multiplier = 2;
    countCoins(reels[3]);
  }
  if((betAmount >= 400) && (reels[0] === reels[1]) && reels[0] === reels[5]){
    multiplier = 2;
    countCoins(reels[0]);
  }
  if((betAmount >= 400) && (reels[2] === reels[4]) && reels[2] === reels[3]){
    multiplier = 2;
    countCoins(reels[0]);
  }
  if((betAmount >= 400) && (reels[5] === reels[4]) && reels[5] === reels[0]){
    multiplier = 2;
    countCoins(reels[0]);
  }
  if((betAmount >= 400) && (reels[3] === reels[7]) && reels[3] === reels[8]){
    multiplier = 2;
    countCoins(reels[0]);
  }
  if((betAmount >= 400) && (reels[6] === reels[4]) && reels[6] === reels[8]){
    multiplier = 2;
    countCoins(reels[0]);
  }
  if((betAmount >= 400) && (reels[6] === reels[7]) && reels[6] === reels[5]){
    multiplier = 2;
    countCoins(reels[0]);
  }
  else{
    checkBetAmount();
  }
};

// Checks to see if paramater passed is equal to
// poke class/poke index of poke array **poke[i]**
// set a time lapse a setTimout to the countCoins function
function countCoins(pokemon){
  if(pokemon === "poke0"){
    coins+= (Pikachu * multiplier);
  }
  if(pokemon === "poke1"){
    coins+= (Torchik * multiplier);
  }
  if(pokemon === "poke2"){
    coins+= (Flareon * multiplier);
  }
  if(pokemon === "poke3"){
    coins+= (Vaporeon * multiplier);
  }
  if(pokemon === "poke4"){
    coins+= (Leafeon * multiplier);
  }
  if(pokemon === "poke5"){
    coins+= (Sevens * multiplier);
  }
  else{
    return false;
  }
};

// Renders amount of coins and current betAmount
function render(){
  $("#coins").text(coins);
  $(".bet_coins").text(betAmount);
}

// gets a random number for selectPokemons() function
function getRndUpTo(upTo) {
  return Math.floor(Math.random() * upTo);
};
