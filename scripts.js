var player = null;

var playerSelected = document.getElementById('jogador-selecionado');

changePlayer('X');

function chooseSquare(id){
   var square = document.getElementById(id);

   square.innerHTML = player;

   square.style.color = '#000';

   if (player === 'X'){
       player = 'O';

   }else{
       player = 'X'
   }

   changePlayer(player);



}

function changePlayer(value){

    player = value;
    playerSelected.innerHTML = player;  
}