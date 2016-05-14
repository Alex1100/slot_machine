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

var $reels = $('.poke');

$('#spin_wheel').on('click', function() {
  selectPokemons();
  countCoins();
});

function selectPokemons() {
  // get three random numbers between 0 and one less than the number of poke images inside of the pokes array
  for (var i = 0; i < 10; i++) {
    var rndNum = getRndUpTo(pokes.length);
    reels[i] = pokes[rndNum];
  };

  $reels.each(function(idx) {
    $(this).removeClass().addClass('poke ' + reels[idx]);
  });
  console.log(reels);
};

function countCoins(reels, coins, multiplier, Pikachu, Torchik, Flareon, Vaporeon, Leafeon, Sevens){
  for(var z = 0; z < 2; z++){
    if((reels[z] === reels[z++]) && reels[z] === 'poke0'){
      multiplier = 10;
      coins += (Pikachu * multiplier);
    } else if((reels[z] === reels[z++]) && reels[z] === 'poke1'){
      multiplier = 10;
      coins+= (Torchik * multiplier);
    } else if((reels[z] === reels[z++]) && reels[z] === 'poke2'){
      multiplier = 10;
      coins += (Flareon & multiplier);
    } else if((reels[z] === reels[z++]) && reels[z] === 'poke3'){
      multiplier = 10;
      coins += (Vaporeon * multiplier);
    } else if((reels[z] === reels[z++]) && reels[z] === 'poke4'){
      multiplier = 10;
      coins += (Leafeon * multiplier);
    } else if((reels[z] === reels[z++]) && reels[z] === 'poke5'){
      multiplier = 10;
      coins += (Sevens * multiplier);
    }
  }
  for(var s = 3; s < 5; s++){
    if((reels[s] === reels[s++]) && reels[s] === 'poke0'){
      multiplier = 10;
      coins += (Pikachu * multiplier);
    } else if((reels[s] === reels[s++]) && reels[s] === 'poke1'){
      multiplier = 10;
      coins+= (Torchik * multiplier);
    } else if((reels[s] === reels[s++]) && reels[s] === 'poke2'){
      multiplier = 10;
      coins += (Flareon & multiplier);
    } else if((reels[s] === reels[s++]) && reels[s] === 'poke3'){
      multiplier = 10;
      coins += (Vaporeon * multiplier);
    } else if((reels[s] === reels[s++]) && reels[s] === 'poke4'){
      multiplier = 10;
      coins += (Leafeon * multiplier);
    } else if((reels[s] === reels[s++]) && reels[s] === 'poke5'){
      multiplier = 10;
      coins += (Sevens * multiplier);
    }
  }
  for(var y = 6; y < 8; y++){
    if((reels[y] === reels[y++]) && reels[y] === 'poke0'){
      multiplier = 10;
      coins += (Pikachu * multiplier);
    } else if((reels[y] === reels[y++]) && reels[y] === 'poke1'){
      multiplier = 10;
      coins+= (Torchik * multiplier);
    } else if((reels[y] === reels[y++]) && reels[y] === 'poke2'){
      multiplier = 10;
      coins += (Flareon & multiplier);
    } else if((reels[y] === reels[y++]) && reels[y] === 'poke3'){
      multiplier = 10;
      coins += (Vaporeon * multiplier);
    } else if((reels[y] === reels[y++]) && reels[y] === 'poke4'){
      multiplier = 10;
      coins += (Leafeon * multiplier);
    } else if((reels[y] === reels[y++]) && reels[y] === 'poke5'){
      multiplier = 10;
      coins += (Sevens * multiplier);
    }
  }

  $(".amount").append("<br><p class='coins'>Total of " + coins + " coins.</p>");
};


function getRndUpTo(upTo) {
  return Math.floor(Math.random() * upTo);
};
