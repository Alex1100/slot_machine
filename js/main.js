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

var $reels = $('.poke');


$(document).ready(function(){
  alert("Welcome to Poke Slots! Enjoy. ++500 Coins++ -Alex1100");
  coins+=500;
  render();
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
    $(".bet_coins").text(betAmount);
	$("#coins").text(coins);
	alert("Max Wager Placed!");
  });

// add casino sound effects when page is loaded
// make buttons that are gey turn yellowish gold when pressed with button pressing sound effect
// for spin button make it turn green when pressed with button pressing sound effect
// spinning sound for wheels/ and make jiffy for body_display and setTimeout function for selectPokemons().
// coin return sound for coins if won
// add lightbulbs next to each row and make them go off whenever that row won to indicate winner
// when winning turn display lights go off
// figure out logic to make game stop if coins reach zero


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
  if((betAmount >= 250) && (reels[0] === reels[1]) && reels[0] === reels[2]){
    multiplier = 10;
    countCoins(reels[0]);
    return true;
  }
  if((reels[3] === reels[4]) && reels[3] === reels[5]){
  multiplier = 10;
  countCoins(reels[3]);
  return true;
  }
  if((betAmount >= 250) && (reels[6] === reels[7]) && reels[6] === reels[8]){
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


//if bet amount up to 100 only return middle
// horizontal only in middle

// if bet amount is passed 250 returns all horizontals
// if bet amount >= 400 play diagonals and all horizontals




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
