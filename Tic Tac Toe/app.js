let turn='0';
let total_turn=0;
let winner=[
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

let board_array=new Array(9).fill('E');

function checkWinner(){
  for(let [idx0,idx1,idx2] of winner){
    if(board_array[idx0]!='E' && board_array[idx0]===board_array[idx1] && board_array[idx1]===board_array[idx2])
      return 1;
  }
  return 0;
}

const img0=document.getElementById('Image0');
const imgX=document.getElementById('ImageX');
const Win0=document.getElementById('Winner0');
const WinX=document.getElementById('WinnerX');

const game=(event)=>{
  const element=event.target;
  if(board_array[element.id]==='E'){
    total_turn++;
    if(turn==='0'){
      imgX.style.height = '75vh';
      imgX.style.width = '30vw';
      img0.style.height = '50vh';
      img0.style.width = '20vw';

      element.innerHTML='0';
      board_array[element.id]="0";
      if(checkWinner()){
        document.getElementById('winningMessage').innerHTML="Winner is 0";
        img0.style.display='none';
        Win0.style.display='block';

        imgX.style.height = '50vh';
        imgX.style.width = '20vw';
        Win0.style.height = '80vh';
        Win0.style.width = '30vw';

        board.removeEventListener('click',game);
        return;
      };
      turn='X';
    }
    else{
      img0.style.height = '75vh';
      img0.style.width = '30vw';
      imgX.style.height = '50vh'; 
      imgX.style.width = '20vw';

      element.innerHTML='X';
      board_array[element.id]="X";
      if(checkWinner()){
        document.getElementById('winningMessage').innerHTML="Winner is X";
        imgX.style.display='none';
        WinX.style.display='block';
        
        img0.style.height = '50vh';
        img0.style.width = '20vw';
        WinX.style.height = '80vh';
        WinX.style.width = '30vw';
        board.removeEventListener('click',game);
        return;
      };
      turn='0';
    }
    if(total_turn==9){
      img0.style.height = '70vh';
      img0.style.width = '25vw';
      imgX.style.height = '70vh';
      imgX.style.width = '25vw';
      document.getElementById('winningMessage').innerHTML="Match is Draw";
      board.removeEventListener('click',game);
    }
  }
}


const board=document.querySelector('.board');
board.addEventListener('click',game);

const restart=document.getElementById('restartButton');
restart.addEventListener('click',()=>{
  const cell=document.getElementsByClassName('cell');
  Array.from(cell).forEach((value)=>{
    value.innerHTML="";
  })

  img0.style.display="block";
  imgX.style.display="block";

  img0.style.height="70vh";
  img0.style.width="25vw";
  imgX.style.height="70vh";
  imgX.style.width="25vw";
  WinX.style.display='none';
  Win0.style.display='none';

  board_array.fill('E');
  turn="0";
  total_turn=0;
  board_array=new Array(9).fill('E');
  board.addEventListener('click',game);
  document.getElementById('winningMessage').innerHTML="";
});


