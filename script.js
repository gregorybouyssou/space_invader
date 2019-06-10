// on positionne le char en TOP
char.style.top = positionCharTop + 'px'

document.addEventListener ('keydown', (event) => {
    
    if (event.key === 'ArrowRight'){
        if(positionChar => 0){
            positionChar = spaceContainer.clientWidth
        }
        positionChar += vitesse
        char.style.left = positionChar + 'px'
    }
    if (event.key === 'ArrowLeft'){
        if(positionChar <= 0){
            positionChar = 0
        }
        positionChar -= vitesse
        char.style.left = positionChar + 'px'
       
    }
    
    
  
})
