// on positionne le char en TOP
char.style.top = positionCharTop + 'px'

// On deplace le char ---
let deplaceChar = document.addEventListener ('keydown', (event) => {
    
    if (event.key === 'ArrowRight'){ // droite
        if(positionChar >= spaceContainer.clientWidth - largeurChar){
            vitesse = 0
        } else {
            vitesse = 5
        }
        positionChar += vitesse
        char.style.left = positionChar + 'px'
    }
    if (event.key === 'ArrowLeft'){ // gauche
        if(positionChar <= 0){
            vitesse = 0
        } else {
            vitesse = 5
        }
        positionChar -= vitesse
        char.style.left = positionChar + 'px'
    }
    
    
  
})

// Deplacement ennemis
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        let deplacement = setInterval(() => {
            
            if(positionEnnemy > spaceContainer.clientWidth - ennemy.offsetWidth){
                vitesseEnnemy = -50
                
            }
            
            if(positionEnnemy < 0 ){
                vitesseEnnemy = 50
            }

            if(positionEnnemy < 0 || positionEnnemy > spaceContainer.clientWidth - ennemy.offsetWidth){
                vitesseTop = 20
            }else {
                vitesseTop = 0
            }
            
            positionEnnemy += vitesseEnnemy
            enemytop += vitesseTop
            ennemy.style.left = positionEnnemy + 'px'
            ennemy.style.top = enemytop + 'px' 
        },1000/1)
    }
})