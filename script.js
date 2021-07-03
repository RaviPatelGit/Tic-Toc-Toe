
let ticArray = [' ',' ',' ',
                ' ',' ',' ',
                ' ',' ','X'];


let board = document.querySelector('.divBoard');
let a = board.childNodes;



// const board = () => {
//     let ticArray = [' ',' ',' ',
//                     ' ',' ',' ',
//                     ' ',' ',' '];
// }

const playButton = document.querySelector('#playButtonId');

playButton.addEventListener('click', () => {
    // for(let i=0 ; i <=8 ; i++ ){
    //     a[i+1].innerHTML = "<h1>" + ticArray[i] + "</h1>"; 
    // }
    displayBox();
});


const displayBox = () => {
    for(let i=0 ; i <=8 ; i++ ){
        a[i+1].innerHTML = "<h1>" + ticArray[i] + "</h1>"; 
    }
}


const createBoard = () => {
    ticArray.forEach((element,index) => {
        let box = document.createElement('div');
        box.classList.add("div"+ index);
        box.addEventListener('click',()=> {
            ticArray[index]='X';
            displayBox()
        });

        board.appendChild(box);
    });
} 

createBoard();

// board.childNodes.