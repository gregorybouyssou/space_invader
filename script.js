document.addEventListener('DOMContentLoaded', function(){
    
    let fond = document.querySelector('.container')
    let char = document.querySelector('.char')
    let balle = document.querySelector('.balle')
    let positionYChar = 500
    let display = 'none'
    let positionX = parseInt(char.style.left)
    let positionYballe = positionYChar
    let vitesseBalle = 2
    let vitesseChar = 5
    

    // char
    char.style.top = positionYChar + 'px'
    document.addEventListener('keydown', function(e){
        // droite (fleche de droite)
        if(e.key === 'ArrowRight'){
            positionX += vitesseChar
            if(positionX > 900 - 80) {
                positionX = 900 - 80
            } 
            char.style.left = positionX + 'px'
            console.log(positionX)
        }
        // gauche (fleche de gauche)
        if(e.key === 'ArrowLeft'){
            positionX -= vitesseChar 
            if (positionX <= 0) {
                positionX = 0
            }
            char.style.left = positionX + 'px'
            console.log(positionX)
        }
    })
    // balle
    document.addEventListener('keydown', function(e){
        if(e.keyCode === 32){
            positionYballe = positionYChar
            balle.style.display = 'block'
            balle.style.left = (positionX + 35) + 'px'
            balle.style.top = positionYChar + 'px' 
        }
    })
    let p = setInterval(function(){
        positionYballe -= vitesseBalle
        balle.style.top = positionYballe + 'px'
    })
})