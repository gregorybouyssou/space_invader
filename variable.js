//container
let spaceContainer = document.querySelector('.space_container')
let positionX = spaceContainer.clientWidth/2
let positionCharTop = pourcentage (spaceContainer.clientHeight,85)

//char
let char = document.querySelector('.char')
let largeurChar = char.clientWidth
let demiLargeurChar = largeurChar/2 
let charTop = char.clientTop

//mouvement char
let vitesse = 5
let positionChar = (positionX - demiLargeurChar)