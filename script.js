
let ticArray = ['O','X','O',
                'X','O','X',
                'O','X','O'];


let board = document.querySelector('.divBoard');
let a = board.childNodes;



// const board = () => {
//     let ticArray = [' ',' ',' ',
//                     ' ',' ',' ',
//                     ' ',' ',' '];
// }

const playButton = document.querySelector('#playButtonId');
playButton.addEventListener('click', () => {
    for(let i=1 ; i <=9 ; i++ ){
        a[2*i-1].innerHTML = "<h1>" + ticArray[i-1] + "</h1>"; 
    }
});





// board.childNodes.