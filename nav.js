// récupérer le menu
let menu = document.getElementById('menu')

// ajouter un évènement au clic
menu.addEventListener('click', () => {
    menu.classList.toggle('open')
})