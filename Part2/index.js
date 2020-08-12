// console.log('The house always wins!')

const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

// console.log(idInput)
//  console.log(colorInput)



function setCard(){
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
    console.log(card)
   
}


function reset(){


    document.getElementById('diamonds').style.color = ''
    document.getElementById('clubs').style.color = ''
    document.getElementById('hearts').style.color = ''
    document.getElementById('spades').style.color = ''
    
}