
// let ticArray = [' ',' ',' ',
//                 ' ',' ',' ',
//                 ' ',' ',' '];


// let board = document.querySelector('.divBoard');
// let a = board.childNodes;

// const displayBox = () => {
//     for(let i=0 ; i <=8 ; i++ ){
//         a[i+1].innerHTML = "<h1>" + ticArray[i] + "</h1>"; 
//     }
// }

// const createBoard = () => {
//     ticArray.forEach((element,index) => {
//         let box = document.createElement('div');
//         box.classList.add("div"+ index);
//         box.addEventListener('click',()=> {
//             ticArray[index]='X';
//             displayBox();
//             if (checkWin('X')) {
//                 stateWin=1;
//             }
//         });

//         board.appendChild(box);
//     });
// } 
// // const checkWin = (player) => {

// //     let isRow = ( ticArray[0]==player & ticArray[1]==player & ticArray[2]==player ) || 
// //                 ( ticArray[3]==player & ticArray[4]==player & ticArray[5]==player ) ||
// //                 ( ticArray[6]==player & ticArray[7]==player & ticArray[8]==player );

// //     let isColumn = ( ticArray[0]==player & ticArray[3]==player & ticArray[6]==player ) || 
// //                 ( ticArray[1]==player & ticArray[4]==player & ticArray[7]==player ) ||
// //                 ( ticArray[2]==player & ticArray[5]==player & ticArray[8]==player );

// //     let isDiagonal = ( ticArray[0]==player & ticArray[4]==player & ticArray[8]==player ) || 
// //                 ( ticArray[2]==player & ticArray[4]==player & ticArray[6]==player );

    
// //     if(isRow || isColumn || isDiagonal){
// //         console.log("Player " + player + " Won");
// //         return true;
// //     }

// //     if (!(ticArray.includes(' '))){
// //         console.log('Draw!');
// //     }
    
// // //     if (!(ticArray.includes(' '))){
// // //         console.log('Draw!');
// // //     }
// // }

// const playTic = (player)=>{

//     const untickedIndexes=[]
//     ticArray.forEach((element, index) => {
//         if(element==' '){
//             untickedIndexes.push(index);
//         }
//     });

//     console.log(untickedIndexes);

//     if(player=='O'){
//         var randomItem = untickedIndexes[Math.floor(Math.random()*untickedIndexes.length)];
//         ticArray[randomItem] = 'O';
//         displayBox();;
//     }
//     if (checkWin('O')){
//         stateWin=1;
//     }

//     console.log(ticArray);
// }


// const gameFlow = () => {
//     createBoard();

//     let stateWin=0;

//     while (stateWin!=0) {
//         play();
//         if (checkWin()){
//             stateWin = 1;
//         }
//     }

//     const play = ()=>{
//         pl
//     }
// }

// gameFlow();

const Player = (sign) => {
    let _sign = sign;

    const getSign = ()=>{
        return _sign;
    }

    const setSign = (sign) => {
        _sign = sign;
    }

    return{
        getSign,
        setSign,
    }
}


const gameBoard = (() => {

    let _board = new Array(9);

    const getField = (num) => {
        return _board[num];
    }

    const setField = (num, player) => {
        const htmlFields = document.querySelectorAll('.field');
        htmlFields[num].innerHTML =  "<h1>" + player.getSign() + "</h1>";
        _board[num]=player.getSign();
    }

    const clear = ()=>{
        for (let i = 0; i < _board.length; i++) {
            _board[i] = undefined;
        }
    }

    const getEmptyFieldsIndexes = () => {
        const result=[] 

        for (let i = 0; i < _board.length; i++) {
            if (_board[i] == undefined) {
                result.push(i)
            }
        }
        return result;
    }

    return{
        _board,
        clear,
        setField,
        getField,
        getEmptyFieldsIndexes,

    }
})();

const gameController = (()=>{

    const _humanPlayer = Player('X')
    const _aiPlayer = Player('O');

    const playerStep = (num) => {
        const field = gameBoard.getField(num);

        if (field == undefined){
            gameBoard.setField(num, _humanPlayer);
            if(checkWin(gameBoard) ){
                console.log(gameBoard._board);
                console.log('Human Won')
            } else if (checkDraw(gameBoard)) {
                console.log('Draw after Human move')
            } else {
                // (async () => {
                //     await _sleep(250 + (Math.random()*300))
                // })()
                aiStep();
                // if(!checkWin(gameBoard)){
                //     endGame();
                // }
            }

        } else {
            console.log('Already Field!');
        }
    }

    const aiStep = () => {
        const emptyBoardIndexes = gameBoard.getEmptyFieldsIndexes();
        const aiChoice = emptyBoardIndexes[Math.floor(Math.random()*emptyBoardIndexes.length)];

        gameBoard.setField(aiChoice, _aiPlayer);
        if(checkWin(gameBoard) ){
            console.log('AI Won')
        } else if (checkDraw(gameBoard)) {
            console.log('Draw after AI move')
        } else {
            
            // if(!checkWin(gameBoard)){
            //     endGame();
            // }
        }

    }

    const checkWin = (board)=>{

        const ticArray=board._board;
        console.log('ticArray', ticArray);
        
        // console.log('1stRow', (ticArray[0]==ticArray[1]==ticArray[2])!=undefined));
        
        const _checkRow = () => {

            
            const temp =
                        ( ticArray[0]=== ticArray[1] & ticArray[0]=== ticArray[2] & (ticArray[0]!=undefined ) )|| 
                        ( ticArray[3]=== ticArray[4] & ticArray[3]=== ticArray[5] & (ticArray[3]!=undefined ) )||
                        ( ticArray[6]=== ticArray[7] & ticArray[6]=== ticArray[8] & (ticArray[6]!=undefined ) );

            // console.log('temp', temp);
            return temp;

        }

        const _checkColumn = () => {
            const temp =
                        ( ticArray[0]=== ticArray[3] & ticArray[0]=== ticArray[6] & (ticArray[0]!=undefined ) )|| 
                        ( ticArray[1]=== ticArray[4] & ticArray[1]=== ticArray[7] & (ticArray[1]!=undefined ) )||
                        ( ticArray[2]=== ticArray[5] & ticArray[2]=== ticArray[8] & (ticArray[2]!=undefined ) );
        return temp;

        }

        const _checkDiagonal = () => {
            const temp =
                        ( ticArray[0]=== ticArray[4] & ticArray[0]=== ticArray[8] & (ticArray[0]!=undefined ) )|| 
                        ( ticArray[2]=== ticArray[4] & ticArray[2]=== ticArray[6] & (ticArray[2]!=undefined ) );

            return temp;

        }        

        // console.log('_checkRow', _checkRow());
        // console.log('_checkColumn', _checkColumn());
        console.log('_checkDiag', _checkDiagonal());

        if(_checkRow() || _checkColumn() || _checkDiagonal()){
            return true
        }
        return false
    }

    const checkDraw = (board) => !(board._board.includes(undefined));

    return {
        // getHumanPlayer,
        // getAiPlayer,
        checkWin,
        checkDraw,
        playerStep,
        // endGame,
    }
})();


const displayController = (()=>{
    const htmlBoard = Array.from(document.querySelectorAll('.field'));

    const clear = ()=>{
        htmlBoard.forEach(field => {
            field.childNodes[0].textContent=''
        })
    }

    const _init = (() => {
        for (let i = 0; i < htmlBoard.length; i++) {
            field = htmlBoard[i];
            field.addEventListener('click', gameController.playerStep.bind(field,i));      
        }
    })();


    return {
        clear
    }
})();

// const gameBoard = ()=>{

// }();


