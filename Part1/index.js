let board = []

function play(clickedId){
   let playerSpan = document.getElementById('player')
   let clickedElement = document.getElementById(clickedId)

   if(playerSpan.innerText === 'X'){
       playerSpan.innerText = 'O'
       clickedElement.innerText = 'X'
       board[clickedId] = 'X'
   } else {
       playerSpan.innerText = 'X'
       clickedElement.innerText = 'O'
       board[clickedId] = 'O'
   }
   console.log(board)

  const topLeft = board[0]
  const topCenter = board[1]
  const topRight = board[2]
  const middleLeft = board[3]
  const middleCenter = board[4]
  const middleRight = board[5]
  const bottomLeft = board[6]
  const bottomCenter = board[7]
  const bottomRight = board[8]

  if(topRight !== undefined && topRight === topCenter && topRight === topLeft){
      alert(`${topRight} wins!` )
      reset()
      return
  } else if(middleLeft !== undefined && topLeft === topCenter && topLeft === topRight){
      alert(`${middleLeft} wins!`)
      reset()
      return
  } else if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
      alert(`${bottomLeft} wins!`)
      reset()
      return
  }else if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
      alert(`${topLeft} wins!`)
      reset()
      return
  } else if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
      alert(`${topCenter} wins!`)
      reset()
      return 
  } else if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
      alert(`${topRight} wins!`)
      reset()
      return
  } else if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
      alert(`${topLeft} wins!`)
      reset()
      return
  } else if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
      alert(`${topRight} wins!`)
      reset()
      return
  }
  let boardFull = true
  for (i=0; i <= 8; i++){
    if (board[i] === undefined){
        boardFull = false
    } 
  }
  if(boardFull === true){
    alert(`That was a cat's game`)
    }

}

function reset(){
for(i=0; i <= 8; i++){

    document.getElementById(i).innerText = ''
    
    }
    return board = []
}

document.getElementById('resetB').addEventListener("click", reset)

// if 0 1 2 = x then x wins
// if 0 1 2 = o then o wins
// if 3 4 5 = x
// if 3 4 5 = o
// if 6 7 8 = x
// if 6 7 8 = o
// if 0 3 6 = x 
// if 0 3 6 = o
// if 1 5 7 = x 
// if 1 5 7 = o
// if 2 5 8 = x
// if 2 5 8 = o



