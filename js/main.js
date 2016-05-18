var pokes = ['poke0', 'poke1', 'poke2', 'poke3',
 'poke4', 'poke5'];

var reels = [];

var coins = 0;
var multiplier = 0;
var Pikachu = 5;
var Torchik = 25;
var Flareon = 30;
var Vaporeon = 40;
var Leafeon = 50;
var Sevens = 150;
var betAmount = 0;

var bulbs = ['empty_bulb.png', 'lit_bulb_0_a.png', 'lit_bulb_0_b.png',
             'lit_bulb_1_a.png', 'lit_bulb_1_b.png', 'lit_bulb_2_a.png',
             'lit_bulb_2_b.png', 'lit_bulb_3_a.png', 'lit_bulb_4_b.png',
             'lit_bulb_4_a.png', 'lit_bulb_4_b.png', 'lit_bulb_5_a.png',
             'lit_bulb_5_b.png'
            ];

var $reels = $('.poke');


$(document).ready(function(){
  alert("Welcome to Poke Slots! Enjoy. ++500 Coins++ -Alex1100");
  coins+=500;
  $(".slot_sounds_b").trigger("play");
  render();
  startFlashing();
});
$('#spin_wheel').on('click', function() {
  if(coins < 0){
    alert("Lost All The Coins! Give It Another Shot!");
    location.reload();
  } else {
    $(".slot_sounds_a").trigger("play");
    $(this).css('color', 'gold');
    selectPokemons();
    checkIndex();
    render();
  }
});
$("#spin_wheel").hover(function(){
    $(this).css('color', 'red');
  }, function(){
    $(this).css('color', 'black');
  });
$("#bet").hover(function(){
  $(this).css('color', 'red');
  }, function(){
    $(this).css('color', 'black');
});
$("#bet").on('click', function(){
  $(this).css('color', 'gold');
  if(betAmount < 491){
    betAmount+=10;
    coins-=10;
    $(".slot_sounds_b").trigger("play");
    $(".bet_amount").text(betAmount);
    $("#coins").text(coins);
  } else{
    alert("Max bet is 500 coins!");
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
  if(betAmount > 9){
    betAmount-=10;
    coins+=10;
    $(".slot_sounds_b").trigger("play");
    $(".bet_coins").text(betAmount);
    $("#coins").text(coins);
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
  betAmount = 500;
  coins-= betAmount;
  $(".slot_sounds_b").trigger("play");
  $(".bet_coins").text(betAmount);
  $("#coins").text(coins);
  alert("Max Wager Placed!");
  });

// 1. sounds for sevens win jackpot + special animation
// 2. if sevens win then pause music and start new jackpot music
// 3. make divs in each cell, shake them using .shake() for a setinterval time
//    on a click event of spin button and setTimeout function for selectPokemons().
// 4. when win condition met have lines and canvas element indicate where win condition is true
// 5. when winning turn display lights all turn to same color and winning sound effect and pause spin function
//    and see if there can be a way to increase coin count by each number

// 5 tasks left to polish up game




function getRandomImage(bulbs, path){
  path = path || 'images/';
  var num = Math.floor(Math.random() * bulbs.length);
  var img = bulbs[num];
  var imgStr = '<img src="' + path + img + '" alt = "">';
  document.write(imgStr);
  document.close;
}


function startFlashing() {

  for (var i = 0; i < 6; i++) {
    (function(j) {
      setInterval(function() {
        changeLight(j);
      }, 275);
    })(i);
  }


  // for (var i = 0; i < 6; i++) {
  //   var $light = $('#light-' + i);
  //   var rnd = Math.floor(Math.random() * 12) + 1;
  //   // background: url("../images/empty_bulb.png") no-repeat center center;
  //   $light.css({'background-image': 'url("images/' + bulbs[rnd] + '")'});
  // }

  function changeLight(lightNum) {
    var $light = $('#light-' + lightNum);
    var rnd = Math.floor(Math.random() * 12) + 1;
    $light.css({'background-image': 'url("images/' + bulbs[rnd] + '")'});
  }
}


function getRndLightNum() {
  return Math.floor(Math.random() * 12) + 1;
}

function selectPokemons() {
  // get three random numbers between 0 and one less than the number of poke images inside of the pokes array
  for (var i = 0; i < 10; i++) {
    var rndNum = getRndUpTo(pokes.length);
    reels[i] = pokes[rndNum];
  }

  $reels.each(function(idx) {
    $(this).removeClass().addClass('poke ' + reels[idx]);
  });
  console.log(reels);
}


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
    coins-=betAmount;
  }
};



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
};

function render(){
  $("#coins").text(coins);
  $(".bet_coins").text(betAmount);
}

function getRndUpTo(upTo) {
  return Math.floor(Math.random() * upTo);
};
