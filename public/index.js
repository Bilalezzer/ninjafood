let burger = document.querySelector('#burger')
let menu = document.querySelector('#menu')

// burger.addEventListener('click', () => {
//     menu.classList.toggle('hidden');
// })

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})