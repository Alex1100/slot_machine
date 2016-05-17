var pokes = ['poke0', 'poke1', 'poke2', 'poke3',
 'poke4', 'poke5'];

 // pokes array is strings that
 // equal classes of images

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


// function spectrum(){
//   var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//   $("#coins").animate("color", "hue", 2000);
//   spectrum();
// }
$(document).ready(function(){
  alert("Welcome to Poke Slots! Enjoy. ++500 Coins++ -Alex1100");
  coins+=500;
  render();
});
$('#spin_wheel').on('click', function() {
  $(".slot_sounds_a").trigger("play");
  // $(this).css()
  $(this).css('color', 'gold');
  selectPokemons();
  checkIndex();
  render();
  });
$("#spin_wheel").hover(function(){
    $(this).css('color', 'red');
  }, function(){
    $(this).css('color', 'white');
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
  if(betAmount || !betAmount){
    betAmount = 500;
    $(".bet_coins").text(betAmount);
  }
  alert("Max Wager Placed!");
});

// add casino sound effects when page is loaded
// make buttons that are gey turn yellowish gold when pressed with button pressing sound effect
// for spin button make it turn green when pressed with button pressing sound effect
// spinning sound for wheels/ and make jiffy for body_display and setTimeout function for selectPokemons().
// coin return sound for coins if won
// add lightbulbs next to each row and make them go off whenever that row won to indicate winner
// when winning turn display lights go off


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
  //figure out why reels returns as undefined


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

// var Torchik = 25;
// var Flareon = 30;
// var Vaporeon = 40;
// var Leafeon = 50;
// var Sevens = 150;




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








//   function countCoins(){
//   if((reels[0] === "poke0" && reels[1] === "poke0") && reels[2] === "poke0"){
//     multiplier = 10;
//     coins+= (Pikachu * multiplier);
//     //see if a variable can be logged or returned to
//     // #money div
//   } else if((reels[3] === "poke0" && reels[4] === "poke0") && reels[5] === "poke0"){
//     multiplier = 10;
//     coins+= (Pikachu * multiplier);
//   } else if((reels[6] === "poke0" && reels[7] === "poke0") && reels[8] === "poke0"){
//     multiplier = 10;
//     coins+= (Pikachu * multiplier);
//   } else if((reels[0] === "poke1" && reels[1] === "poke1") && reels[2] === "poke1"){
//     multiplier = 10;
//     coins+= (Torchik * multiplier);
//     //see if a variable can be logged or returned to
//     // #money div
//   } else if((reels[3] === "poke1" && reels[4] === "poke1") && reels[5] === "poke1"){
//     multiplier = 10;
//     coins+= (torchik * multiplier);
//   } else if((reels[6] === "poke1" && reels[7] === "poke1") && reels[8] === "poke1"){
//     multiplier = 10;
//     coins+= (Torchik * multiplier);
//   } else if((reels[0] === "poke2" && reels[1] === "poke2") && reels[2] === "poke2"){
//     multiplier = 10;
//     coins+= (Flareon * multiplier);
//     //see if a variable can be logged or returned to
//     // #money div
//   } else if((reels[3] === "poke2" && reels[4] === "poke2") && reels[5] === "poke2"){
//     multiplier = 10;
//     coins+= (Flareon * multiplier);
//   } else if((reels[6] === "poke2" && reels[7] === "poke2") && reels[8] === "poke2"){
//     multiplier = 10;
//     coins+= (Flareon * multiplier);
//   } else if((reels[0] === "poke3" && reels[1] === "poke3") && reels[2] === "poke3"){
//     multiplier = 10;
//     coins+= (Vaporeon * multiplier);
//     //see if a variable can be logged or returned to
//     // #money div
//   } else if((reels[3] === "poke3" && reels[4] === "poke3") && reels[5] === "poke3"){
//     multiplier = 10;
//     coins+= (Vaporeon * multiplier);
//   } else if((reels[6] === "poke3" && reels[7] === "poke3") && reels[8] === "poke3"){
//     multiplier = 10;
//     coins+= (Vaporeon * multiplier);
//   } else if((reels[0] === "poke4" && reels[1] === "poke4") && reels[2] === "poke4"){
//     multiplier = 10;
//     coins+= (Leafeon * multiplier);
//     //see if a variable can be logged or returned to
//     // #money div
//   } else if((reels[3] === "poke4" && reels[4] === "poke4") && reels[5] === "poke4"){
//     multiplier = 10;
//     coins+= (Leafeon * multiplier);
//   } else if((reels[6] === "poke4" && reels[7] === "poke4") && reels[8] === "poke4"){
//     multiplier = 10;
//     coins+= (Leafeon * multiplier);
//   } else if((reels[0] === "poke5" && reels[1] === "poke5") && reels[2] === "poke5"){
//     multiplier = 10;
//     coins+= (Sevens * multiplier);
//     //see if a variable can be logged or returned to
//     // #money div
//   } else if((reels[3] === "poke5" && reels[4] === "poke5") && reels[5] === "poke5"){
//     multiplier = 10;
//     coins+= (Sevens * multiplier);
//   } else if((reels[6] === "poke5" && reels[7] === "poke5") && reels[8] === "poke5"){
//     multiplier = 10;
//     coins+= (Sevens * multiplier);
//   } else{
//     return null;
//   }
// };




// need to work on winning logic for coins
// and create a controller
// function to store coins won and implement
// max bet min bet and custom bet

//step 1 create buttons for bets
//reels array has outcome of images


// function countCoins(reels, coins, multiplier, Pikachu, Torchik, Flareon, Vaporeon, Leafeon, Sevens){
//   for(var z = 0; z < 2; z++){
//     if((reels[z] === reels[z++]) && reels[z] === 'poke0'){
//       multiplier = 10;
//       coins += (Pikachu * multiplier);
//     } else if((reels[z] === reels[z++]) && reels[z] === 'poke1'){
//       multiplier = 10;
//       coins+= (Torchik * multiplier);
//     } else if((reels[z] === reels[z++]) && reels[z] === 'poke2'){
//       multiplier = 10;
//       coins += (Flareon & multiplier);
//     } else if((reels[z] === reels[z++]) && reels[z] === 'poke3'){
//       multiplier = 10;
//       coins += (Vaporeon * multiplier);
//     } else if((reels[z] === reels[z++]) && reels[z] === 'poke4'){
//       multiplier = 10;
//       coins += (Leafeon * multiplier);
//     } else if((reels[z] === reels[z++]) && reels[z] === 'poke5'){
//       multiplier = 10;
//       coins += (Sevens * multiplier);
//     } else {
//       return null;
//     }
//   }
//   for(var s = 3; s < 5; s++){
//     if((reels[s] === reels[s++]) && reels[s] === 'poke0'){
//       multiplier = 10;
//       coins += (Pikachu * multiplier);
//     } else if((reels[s] === reels[s++]) && reels[s] === 'poke1'){
//       multiplier = 10;
//       coins+= (Torchik * multiplier);
//     } else if((reels[s] === reels[s++]) && reels[s] === 'poke2'){
//       multiplier = 10;
//       coins += (Flareon & multiplier);
//     } else if((reels[s] === reels[s++]) && reels[s] === 'poke3'){
//       multiplier = 10;
//       coins += (Vaporeon * multiplier);
//     } else if((reels[s] === reels[s++]) && reels[s] === 'poke4'){
//       multiplier = 10;
//       coins += (Leafeon * multiplier);
//     } else if((reels[s] === reels[s++]) && reels[s] === 'poke5'){
//       multiplier = 10;
//       coins += (Sevens * multiplier);
//     } else {
//       return null;
//     }
//   }
//   for(var y = 6; y < 8; y++){
//     if((reels[y] === reels[y++]) && reels[y] === 'poke0'){
//       multiplier = 10;
//       coins += (Pikachu * multiplier);
//     } else if((reels[y] === reels[y++]) && reels[y] === 'poke1'){
//       multiplier = 10;
//       coins+= (Torchik * multiplier);
//     } else if((reels[y] === reels[y++]) && reels[y] === 'poke2'){
//       multiplier = 10;
//       coins += (Flareon & multiplier);
//     } else if((reels[y] === reels[y++]) && reels[y] === 'poke3'){
//       multiplier = 10;
//       coins += (Vaporeon * multiplier);
//     } else if((reels[y] === reels[y++]) && reels[y] === 'poke4'){
//       multiplier = 10;
//       coins += (Leafeon * multiplier);
//     } else if((reels[y] === reels[y++]) && reels[y] === 'poke5'){
//       multiplier = 10;
//       coins += (Sevens * multiplier);
//     } else{
//       return null;
//     }
//   }

//   $(".amount").append("<br><p class='coins'>Total of " + coins + " coins.</p>");
// };





function getRndUpTo(upTo) {
  return Math.floor(Math.random() * upTo);
};
